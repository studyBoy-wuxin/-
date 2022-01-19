import {FC, useState} from "react";
import {View, Text, ScrollView, Image} from '@tarojs/components'
import Taro from '@tarojs/taro'
import {AtAvatar, AtIcon, AtList, AtListItem, AtMessage} from "taro-ui";
import './index.less'
import NavigationBar from "../../components/NavigationBar";
import useDidShow = Taro.useDidShow;
import {Music} from "../Admin";

type contentItem = {imgUrl:string,desc:string,color:string,antherInfo?:string,clickEvent?:()=>void}
type UserType = {
  uid:string
  uname:string
  avater_url:string
}
const initUser:UserType = {
  uid:'3119004000',
  uname:'无名氏',
  avater_url:''

}
const Owner:FC = ()=>{
  const ToPages = (type:string)=>{
    type === 'icon-shoucang' &&Taro.navigateTo({url:'/pages/MusicList/index?type=LoveMusic'})
    // type === 'icon-geren6' &&Taro.navigateTo({url:'/pages/Experience/index'})
    // type === 'icon-kechengguanli' &&Taro.navigateTo({url:'/pages/CourseInfo/index'})
    // type === 'icon-huojiang' &&Taro.navigateTo({url:'/pages/CertificateInfo/index'})
  }

  const contentItemInfo:contentItem[] = [
    {imgUrl:'icon-shoucang',desc:'收藏',color:'rgb(118,202,209)'},
    {imgUrl:'icon-xiangxia4',desc:'本地',color:'rgb(247,162,162)'},
    {imgUrl:'icon-shangchuanyunpan',desc:'云盘',color:'rgb(90,115,215)'},
    {imgUrl:'icon-yigou',desc:'已购',color:'rgb(241,183,114)'},
  ]


  const [userInfo,setUserInfo] = useState<UserType>(initUser);
  const [RecentPlayList, setRecentPlayList] = useState<Music[]>();

  const checkUserInfo = ()=>Taro.navigateTo({url:'/pages/Owner/Update/index'})
  const ToLoveMusic = ()=>Taro.navigateTo({url:'/pages/MusicList/index?type=LoveMusic'})

  const ToLogin = ()=> Taro.navigateTo({url:'/pages/Login/index'})

  const footerItemInfo:contentItem[] = [
    {imgUrl:'user',desc:'个人信息',color:'',antherInfo:'完善个人信息',clickEvent:checkUserInfo},
    {imgUrl:'star-2',desc:'我的收藏',color:'',antherInfo:'查看个人收藏',clickEvent:ToLoveMusic},
    {imgUrl:'download-cloud',desc:'我的云盘',color:'',antherInfo:'查看收藏的云盘'},
    {imgUrl:'video',desc:'我的视频',color:'',antherInfo:'查看收藏的视频'},
  ]

  useDidShow(()=>{
    if(!Taro.getStorageSync('userInfo')){
      Taro.atMessage({'message':'请先登录','type':'info'})
    }else{
      const user = Taro.getStorageSync('userInfo')
      console.log('useDidshow',user)
      user && setUserInfo(user)

      const recentPlay = Taro.getStorageSync('recentPlay')
      recentPlay && setRecentPlayList(recentPlay)
    }
  })

  const PlaySong = (music:Music)=>{
    const app = Taro.getApp()
    app.musicInfo = music
    Taro.switchTab({url:`/pages/SongDetail/index`})
  }

  return (
    <View className='Owner_box'>
      <NavigationBar BarText='我的主页' />
      <View><AtMessage /></View>

      <View className='Owner_header'>
        <View className='top'>
          <View className='avatar_box'>
            <View className='avatar'>
              {
                userInfo.avater_url===''?
                  <View className='iconfont icon icon-yonghutouxiang1' onClick={ToLogin} />:
                  <AtAvatar circle image={userInfo.avater_url} />
              }
            </View>
            <View className='stuInfo'>
              <Text>{userInfo.uname}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className='Owner_middle'>
        {
          contentItemInfo?.map(item=>(
            <View className='contentItem' key={item.desc} onClick={()=>ToPages(item.imgUrl)}>
              <View className={`iconfont ${item.imgUrl}`} style={`font-size:30PX;color:${item.color};`} />
              <View className='item_desc'>{item.desc}</View>
            </View>
          ))
        }
      </View>
      <View className='Owner_footer'>
        <View className='recentPlayContainer'>
          <View className='top' onClick={()=>Taro.navigateTo({url:'/pages/MusicList/index?type=recent'})}>
            <Text>最近播放</Text>
            <View>更多<AtIcon value='chevron-right' size={20} /></View>
          </View>
          <ScrollView
            className='scrollView'
            scrollX
            enableFlex
          >
            {
              RecentPlayList ? RecentPlayList.slice(0,11).map(item=>(
                <View className='scrollItem' onClick={()=>PlaySong(item)}><Image src={item.img_url} /></View>
              )):<View className='noRecentPlay'>暂无播放记录.....</View>
            }
          </ScrollView>
        </View>
        <AtList>
          {
            footerItemInfo.map(item=>(
              <AtListItem
                title={item.desc}
                note={item.antherInfo}
                arrow='right'
                iconInfo={{ size: 25, color: '#ff8589', value: item.imgUrl }}
                onClick={item.clickEvent}
              />
            ))
          }
        </AtList>
      </View>
    </View>
  )
}
export default Owner
