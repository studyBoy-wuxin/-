import {FC, useEffect, useState} from "react";
import {Image, Swiper, SwiperItem, View, Text, ScrollView} from "@tarojs/components";
import {AtDivider, AtIcon, AtMessage} from "taro-ui";
import Taro from '@tarojs/taro'
import NavigationBar from "../../components/NavigationBar";
import './index.sass'
import {findAllBanner, findAllRecommendSong, findAllBang, findMusicByBangidList} from "../../RouteInfo";

type BannerType = {
  id:number,
  url:string
}
type RecommendType = {
  rid:string,
  name:string,
  img_url:string
}
type BangType = {
  id:string,
  name:string,
  img_url:string
}
export type Music = {
  mid:string,
  name:string,
  artist:string,
  img_url:string,
  audio_url:string,
  songTimeMinutes:string,
}
type Bang_Music = {
  Bang:BangType,
  MusicList:Music[]
}
const Admin: FC = () => {

  const IconItemList:{name:string,desc:string}[] = [
    {name:'icon-meirituijian-',desc:'今日推荐'},
    {name:'icon-diantai',desc:'电台'},
    {name:'icon-gedan',desc:'歌单'},
    {name:'icon-paihangbanggequ',desc:'排行榜'},
  ]
  const [BannerList,setBannerList] = useState<BannerType[]>();
  const [RecommendSongList, setRecommendSongList] = useState<RecommendType[]>();
  const [_, setBang] = useState<BangType[]>();
  const [BangMusicList, setBangMusicList] = useState<Bang_Music[]>();
  const [searchValue, setSearchValue] = useState('');

  const getAllBang = async ()=>{
    try{
      const data:BangType[] = await findAllBang()
      setBang(data)
      const BangidList = data.map(item=> item.id).toString()
      const MusicList = await findMusicByBangidList({BangidList})
      setBangMusicList(MusicList)
    }catch (e) {Taro.atMessage({'message':e,'type':'error'}) }
  }

  // 获取到所有的推荐歌单
  const getAllRecommendSong =async ()=>{
    try{
      const data = await findAllRecommendSong()
      setRecommendSongList(data)
    }catch (e) {Taro.atMessage({'message':e,'type':'error'}) }
  }

  // 获取到所有的banner图片url
  const getAllBanner = async ()=>{
    try{
      const data = await findAllBanner()
      setBannerList(data)
    }catch (e) { Taro.atMessage({'message':e,'type':'error'}) }

  }

  const PlaySong = (musicInfo:Music)=>{
    const app = Taro.getApp()
    app.musicInfo = musicInfo
    Taro.switchTab({url:`/pages/SongDetail/index`})
  }

  const onSearch = ()=>{
    if(searchValue==='') Taro.showToast({title:'请输入内容'})
    else Taro.navigateTo({url:`/pages/MusicList/index?name=${searchValue}&type=searchMusic`})
  }

  useEffect(()=>{
    // 获取到所有的banner图片url
    getAllBanner()
    // 获取到所有的推荐歌单
    getAllRecommendSong()
    // 获取排行榜的信息
    getAllBang()

  },[])
  return (
    <View className='admin_box'>
      <View><AtMessage /></View>
      <NavigationBar
        searchBar
        icon={{value:'menu',onIconClick:()=>{}}}
        onActionClick={onSearch}
        onSearchChange={(value)=>setSearchValue(value)}
        searchValue={searchValue}
      />
      {/*轮播图区*/}
      <View className='Swiper-view'>
        <Swiper
          className='myswiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
          {BannerList?.map(item=>(
            <SwiperItem key={item.id}>
              <Image src={item.url} />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
      {/*图标区域*/}
      <View className='Icon_box'>
        {
          IconItemList.map(item=>(
            <View className='IconItem' key={item.name}>
              <View className='box'>
                <View className={`iconfont ${item.name} icon`} />
              </View>
              <View className='desc'>{item.desc}</View>
            </View>
          ))
        }
      </View>
      <AtDivider lineColor='#e8e8e8' customStyle={{height:5,marginBottom:'5rpx'}} />
      {/*推荐歌曲*/}
      <View className='recommend_box'>
        <View className='top_title' onClick={()=>Taro.navigateTo({url:'/pages/MoreSongSheet/index'})}>
          <Text>推荐歌单</Text>
          <View>更多<AtIcon value='chevron-right' size={14} /></View>
        </View>
        <ScrollView
          className='scrollview'
          enableFlex
          scrollX={true as boolean}
          scrollWithAnimation
        >
          {
            RecommendSongList && RecommendSongList.slice(0,7).map(item=>(
              <View
                className='scrollItem'
                key={item.rid}
                onClick={()=>Taro.navigateTo({url:`/pages/RecommendDetail/index?rid=${item.rid}&recommend=${JSON.stringify(item)}`})}
              >
                <Image src={item.img_url} mode='scaleToFill' />
                <View>{item.name}</View>
              </View>
            ))
          }
        </ScrollView>
      </View>
      <AtDivider lineColor='#e8e8e8' customStyle={{height:5,marginBottom:'5rpx'}} />
      {/*排行榜*/}
      <View className='chart'>
        <View className='top_title'>
          <Text>音乐排行榜</Text>
          <View>更多<AtIcon value='chevron-right' size={14} /></View>
        </View>
        <Swiper
          className='topListSwiper'
        >
          {
            BangMusicList?.map(item=>(
              <SwiperItem className='topListItem' key={item.Bang.id}>
                <View className='topListItemView' style={{backgroundColor:'#e1ece8'}}>
                  <View className='topListItem_left'>
                    <Text style={{color:'#e42d72'}}>{item.Bang.name}</Text>
                    {
                      item.MusicList?(
                        <View className='img_box'>
                          <View className='q'><Image src={item.MusicList[0].img_url} /></View>
                          <View className='w'><Image src={item.MusicList[1].img_url} /></View>
                          <View className='e'><Image src={item.MusicList[2].img_url} /></View>
                        </View>
                      ):''
                    }
                  </View>
                  <View className='topListItem_right'>
                    {
                      item.MusicList.slice(0,3).map(item2=>(
                        <View className='rightItem' key={item2.mid} onClick={()=>PlaySong(item2)}>
                          <Text>1.{item2.name}&nbsp;</Text>
                          <Text>- {item2.artist}</Text>
                          <View className='iconfont icon icon-yunhang' />
                        </View>
                      ))
                    }
                  </View>
                </View>
              </SwiperItem>
            ))
          }

        </Swiper>
      </View>
    </View>
  )
}
export default Admin
