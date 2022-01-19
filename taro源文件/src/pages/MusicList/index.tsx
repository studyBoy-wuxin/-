import {FC, useState} from "react";
import {Text, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import {AtMessage,AtActivityIndicator} from "taro-ui";
import './index.sass'
import {Music} from "../Admin";
import {
  findLoveMusicByUid,
  findMusicByName
} from "../../RouteInfo";
import NavigationBar from "../../components/NavigationBar";
import useDidShow = Taro.useDidShow;

const LoveMusic: FC = () => {
  const [MusicList, setMusicList] = useState<Music[]>([]);
  const [Type, setType] = useState('')
  const [IsError, setIsError] = useState(false);

  const onPlay = (music:Music)=>{
    const app = Taro.getApp()
    app.musicInfo = music
    Taro.switchTab({url:'/pages/SongDetail/index'})
  }

  const getLoveMusic =async ()=>{
    const userInfo = Taro.getStorageSync('userInfo')
    try{
      const data =await findLoveMusicByUid({uid:userInfo.uid})
      console.log(data)
      setMusicList(data)
    }catch (e){Taro.atMessage({'message':e,'type':'error'})}
  }

  const getMusicByName = async (name:string)=>{
    try{
      const data = await findMusicByName({name})
      console.log(data)
      data.length===0 && setIsError(true)
      setMusicList(data)
    }catch (e){
      setIsError(true)
      Taro.atMessage({'message':e,'type':'error'})
    }
  }

  useDidShow(()=>{
    const type = Taro.getCurrentInstance().router?.params.type
    type && setType(type)
    if(type==='LoveMusic') getLoveMusic()
    else if(type==='searchMusic') {
      // 音乐查找
      const name = Taro.getCurrentInstance().router?.params.name
      name && getMusicByName(name as string)
    }else if(type==='recent'){
      const data = Taro.getStorageSync('recentPlay')
      setMusicList(data)
    }
  })

  return (
    <View className='LoveMusic_box'>
      <NavigationBar BarText={Type=='LoveMusic'?'收藏歌曲':Type=='searchMusic'?'搜索歌曲':Type=='recent'?'最近播放':'歌曲信息'} backIcon />
      <View><AtMessage /></View>
      <View className='bottom'>
        <View className='bottom_header'>
          <View className='iconfont icon icon-yunhang' />
          <Text className='title'>播放全部</Text>
          <Text>(共{MusicList?.length}首)</Text>
        </View>

        <View className='MusicInfo_box'>
          {
            MusicList && MusicList.length>0 ? MusicList?.map((item, index)=>(
              <View className='MusucItem' key={item.mid} onClick={()=>onPlay(item)}>
                <View>{index+1}</View>
                <View className='musicInfo'>
                  <Text>{item.name}</Text>
                  <View className='a'><View className='iconfont iconw icon-wusunyinzhi' />{item.artist}</View>
                </View>
                <View className='iconfont iconb icon-yunhang' />
              </View>
            )):Type=='searchMusic'?
              <View className='noneSong'>{IsError?'搜索失败,请重试!':<AtActivityIndicator size={60} content='正在查找中...' />}</View>:
              Type=='LoveMusic'?<View className='noneSong'>暂无收藏歌曲...</View>:
                Type=='recent'?<View className='noneSong'>暂无最近播放记录...</View>:''
          }
        </View>

      </View>
    </View>
  )
}
export default LoveMusic
