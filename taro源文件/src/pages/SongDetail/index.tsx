import {FC, useEffect, useRef, useState} from 'react';
import {View,Image,Text,Slider} from '@tarojs/components';
import Taro from '@tarojs/taro'
import {AtIcon, AtMessage} from "taro-ui";
import './index.sass'
import NavigationBar from "../../components/NavigationBar";
import {Music} from '../Admin'
import InnerAudioContext = Taro.InnerAudioContext;
import useDidShow = Taro.useDidShow;
import {findNumByUidAndMid, insertLoveMusic, removeLoveMusic} from "../../RouteInfo";

type audioType = {
  duration:number,
  currentTime:number,
  sliderValue:number
}
let i = 1
const Index: FC = () => {
  const disc = useRef<any>();
  const [musicInfo, setMusicInfo] = useState<Music>();
  const [IsPlay, setIsPlay] = useState(false);
  const [like, setLike] = useState(false);
  // 播放长度
  const [AudioObj, setAudioObj] = useState<audioType>({sliderValue:0,duration:0,currentTime:0});
  // 进度条的定时器
  const [Timer1, setTimer1] = useState<any>();
  // 转盘的定时器
  const [Timer2, setTimer2] = useState<any>();
  // 转盘转动的角度
  const [_, setRotateSize] = useState(0);
  const [AudioContext, setAudioContext] = useState<InnerAudioContext>();

  const LoveMusic =async (mid:string)=>{
    const user = Taro.getStorageSync('userInfo')
      if(user){
        if(like===true){
          // 取消收藏
          try{
            const data =await removeLoveMusic({mid:mid,uid:user.uid})
            if(data===1) Taro.showToast({
              title:'取消成功',
              icon: 'none',
              duration: 2000})
            else Taro.showToast({
              title:'取消失败',
              icon: 'none',
              duration: 2000})
          }catch (e) { Taro.atMessage({'message':e,'type':'error'}) }
        }else {
          try{
            const data =await insertLoveMusic({mid:mid,uid:user.uid})
            if(data===1) Taro.showToast({
              title:'收藏成功',
              icon: 'none',
              duration: 2000})
            else Taro.showToast({
              title:'收藏失败',
              icon: 'none',
              duration: 2000})
          }catch (e) { Taro.atMessage({'message':e,'type':'error'}) }
        }
        setLike(!like)
      }else{
        Taro.showToast({
          title:'请先登录',
          icon: 'none',
          duration: 2000})
      }
    }

  // 将数字转换成时间格式
  const changeNumType = (time:string)=>{
    time = time === '0' ? '00.00' : time
    const index = time.indexOf('.')
    const a = time.substr(0,index)
    const b = time.substr(index+1,2)
    const list = [a.length===1?`0${a}`:a,b.length===1?`0${b}`:b]
    return list.join(':')
  }

  // 开始转动转盘
  const onRun = ()=>{
    const a = setInterval(()=>{
      setRotateSize(value=>{
        disc.current.style.transform = `rotate(${value+36}deg)`
        return 36*i
      })
      i++
    },1000)
    setTimer2(a)
  }

  // 暂停播放和进度条
  const onparse = ()=> {
    clearInterval(Timer1)
    clearInterval(Timer2)
    // 暂停播放
    AudioContext?.pause()
  }

  //  开始播放和进度条
  const onplay = ()=>{
    // 播放音频
    AudioContext?.play()
    // 转动转盘
    onRun()
    // 开启定时器，每秒+0.01
    const a = setInterval(
      ()=> setAudioObj(value=>{
        const cTime = value.currentTime
        const dTime = value.duration
        return {...value,sliderValue:cTime===dTime?dTime:cTime+1, currentTime:cTime===dTime?dTime:cTime+1}
      })
      ,1000)
    setTimer1(a)
  }

  // 防止 定时器获取到underfined 每次变化都重置onEnded方法
  useEffect(() => {
    AudioContext?.onEnded(()=>{
      // 清除定时器 暂停播放 重置旋转角度和i 重置进度条
      onparse()
      setIsPlay(false)
      setRotateSize(0)
      i=1
      disc.current.style.transform = 'rotate(0deg)'
      const time = Math.floor(AudioContext?.duration)
      setAudioObj({currentTime:0,duration:time,sliderValue:0})
    })
  },[Timer1,Timer2]);

  // 点击 暂停 开始 的方法
  const handle = ()=>{
    //点击暂停按钮时，开始播放
    if(!IsPlay) onplay()
    // 暂停播放，以及清除定时器
    else onparse()
    setIsPlay(!IsPlay)
  }

  const registerAudio = (musicInfo:Music)=>{
    setMusicInfo(musicInfo)
    const audio = Taro.createInnerAudioContext()
    audio.src=musicInfo.audio_url
    // 注册音频
    audio.onCanplay(()=>{
      // 必须先调用一次 后续才能获取到 否则一直都是0
      audio.duration
      setTimeout(()=>{
        const time = Math.floor(audio.duration)
        setAudioObj(a=>({...a,duration:time}))
      },100)
    })
    audio.onPlay(()=>  console.log('开始播放') )
    audio.onError(res => Taro.atMessage({'message':res.errMsg,'type':'error'}))
    setAudioContext(audio)
  }

  const AddToRecentPlay = (music:Music)=>{
    if(music.mid){
      const recentPlay:Music[] = Taro.getStorageSync('recentPlay')
      if(recentPlay){
        const index = recentPlay.findIndex(item=>item.mid===music.mid)
        if(index===-1){
          // 说明此时的 最近播放 没有该歌曲的记录，那么就添加
          Taro.setStorage({
            key:'recentPlay',
            data:[music,...recentPlay]
          })
        }else if(index>-1){
          // 说明此时的 最近播放 已经存放了该歌曲的记录，那么就把他先删除，再提前
          recentPlay.splice(index,1)
          Taro.setStorage({
            key:'recentPlay',
            data:[music,...recentPlay]
          })
        }
      }else Taro.setStorage({key:'recentPlay',data:[music] })     // 如果最近播放无记录，那么久直接添加
    }
  }

  // 每次展示到前台的时候触发
  useDidShow(() => {
    const app = Taro.getApp()
    const a = app.musicInfo
    if(!musicInfo){
      // 添加到最近播放
      AddToRecentPlay(a)
      registerAudio(a)
    }else{
      // 如果展示到前台的时候，App中的musicInfo与组件中的不一样，那就重新注册，以App中的数据为主
      if(a.mid!==musicInfo.mid) {
        // 添加到最近播放
        AddToRecentPlay(a)
        AudioContext?.destroy()
        onparse()
        setAudioObj({sliderValue:0,duration:0,currentTime:0})
        setIsPlay(false)
        setRotateSize(0)
        i=1
        disc.current.style.transform = 'rotate(0deg)'
        registerAudio(a)
      }
    }
  })

  const checkIsLove =async (mid:string,uid:string)=>{
    try {
      const data = await findNumByUidAndMid({mid,uid})
      data>0 && setLike(true)
      console.log(data)
    }catch (e){Taro.atMessage({'message':e,'type':'error'})}
  }

  useEffect(() => {
    if(musicInfo?.mid){
      setLike(false)
      checkIsLove(musicInfo.mid,Taro.getStorageSync('userInfo').uid)
      onplay()
      setIsPlay(true)
    }
  }, [AudioContext]);

  return (
    <View className='songDetailContainer'>
      <NavigationBar BarText={musicInfo?.name?musicInfo.name:'无心歌单'} fontsize='35rpx' />
      <View><AtMessage /></View>
      <View className='author'>{musicInfo?musicInfo.artist:'无名氏'}</View>
      <View className='bottoncircle'></View>
      <Image className={`needle ${IsPlay?'needlerotate':''}`} src={require('../../accept/song/needle.png')} />
      <View ref={disc} className={`circle ${IsPlay?'circleRotate':''}`}>
        <Image className='disc' src={require('../../accept/song/disc.png')} />
        <Image className='musicImg' src={musicInfo?musicInfo.img_url:require('../../accept/images/p1.jpg')} />
      </View>

      <View className='bottom'>
        <View className='a'>
          <AtIcon
            className='topicon'
            value={`${like?'star-2':'star'}`}
            size='30'
            color='white'
            onClick={()=>LoveMusic(musicInfo?.mid as string)}
          />
          <AtIcon className='topicon' value='download' size='30' color='white' />
          <AtIcon className='topicon' value='message' size='30' color='white' />
          <AtIcon className='topicon' value='link' size='30' color='white' />
          <AtIcon className='topicon' value='menu' size='30' color='white' />
        </View>
        <View className='b'>
          <Slider
            min={0}
            max={AudioObj.duration}
            step={1}
            blockSize={10}
            value={AudioObj.sliderValue}
            activeColor='white'
            backgroundColor='#bfbfbf'
            onChange={value=>{
              if(AudioContext){
                const a = value.detail.value
                AudioContext.seek(a)
                setAudioObj(ad=>({...ad,currentTime:value.detail.value,sliderValue:value.detail.value }))
              }
            }}
          />
          <View className='startEnd'>
            <Text>{changeNumType(`${Math.floor(AudioObj.currentTime/60)}.${AudioObj.currentTime%60}`)}</Text>
            <Text>{changeNumType(`${Math.floor(AudioObj.duration/60)}.${AudioObj.duration%60}`)}</Text>
          </View>
        </View>
        {/*控制按钮*/}
        <View className='c'>
          <View className='kuai'>
            <View className='iconfont icon-kuaijin1 icon' onClick={()=> {
              AudioContext && AudioContext.seek(AudioObj.currentTime-15)
              setAudioObj(value=>({...value,currentTime:value.currentTime-15,sliderValue:value.sliderValue-15}))
            }} />
            <Text>快退</Text>
          </View>
          <View
            className={`iconfont ${IsPlay?'icon-zanting ':'icon-yunhang'} icon`}
            style={{fontSize:'140rpx',padding:'0 30rpx',position:'relative',top:'-12rpx'}}
            onClick={handle}
          />
          <View className='kuai'>
            <View className='iconfont icon-kuaijin icon' onClick={()=> {
              AudioContext && AudioContext.seek(AudioObj.currentTime+15)
              setAudioObj(value=>({...value,currentTime:value.currentTime+15,sliderValue:value.sliderValue+15}))
            }} />
            <Text>快进</Text>
          </View>
        </View>
      </View>

    </View>
  )
}
export default Index
