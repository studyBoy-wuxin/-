import {FC, useEffect, useState} from "react";
import {Image, View,Text} from "@tarojs/components";
import Taro from '@tarojs/taro'
import {AtMessage} from "taro-ui";
import './index.sass'
import {findMusicByrid} from "../../RouteInfo";
import {Music} from "../Admin";
import NavigationBar from "../../components/NavigationBar";

type RecommendSongType={
  rid:string,
  name:string,
  author:string,
  img_url:string,
  info:string,
  listencnt:number
}

const RecommendDetail: FC = () => {

  const [MusicList, setMusicList] = useState<Music[]>();
  const [RecommendSong, setRecommendSong] = useState<RecommendSongType>({rid:'',
    name:'',
    author:'',
    img_url:'',
    info:'',
    listencnt:1});

  const getMusicByRid = async (rid:string)=>{
    try{
      const data =await findMusicByrid({rid})
      setMusicList(data)
    }catch (e) {Taro.atMessage({'message':e,'type':'error'})}
  }

  const onPlay = (music:Music)=>{
    const app = Taro.getApp()
    app.musicInfo = music
    Taro.switchTab({url:'/pages/SongDetail/index'})
  }


  useEffect(() => {
    const rid = Taro.getCurrentInstance().router?.params.rid
    const recommend = Taro.getCurrentInstance().router?.params.recommend
    const a = JSON.parse(recommend as string)
    recommend && setRecommendSong(a)
    rid && getMusicByRid(rid)
  }, []);


  return (
    <View className='RecommendDetail_box'>
      <NavigationBar BarText={RecommendSong.name==''?'歌单信息':RecommendSong.author+'的歌单'} backIcon />
      <AtMessage />
      {
        RecommendSong && (
        <View className='top' >
          <Image src={RecommendSong.img_url} className='a' mode='center' />
          <View className='top_left'>
            <Image src={RecommendSong.img_url} mode='scaleToFill' />
          </View>
          <View className='top_right'>
            <View className='songDetail'>
              <View className='songListName'>
                {RecommendSong.name}
              </View>
              <View className='authorName'>
                {RecommendSong.author}
              </View>
              <View className='detail'>
                {RecommendSong.info}
              </View>
            </View>
          </View>
        </View>
        )
      }

      <View className='bottom'>
        <View className='bottom_header'>
          <View className='iconfont icon icon-yunhang' />
          <Text className='title'>播放全部</Text>
          <Text>(共{MusicList?.length}首)</Text>
        </View>

        <View className='MusicInfo_box'>
          {
            MusicList?.map((item,index)=>(
              <View className='MusucItem' key={item.mid} onClick={()=>onPlay(item)}>
                <View>{index+1}</View>
                <View className='musicInfo'>
                  <Text>{item.name}</Text>
                  <View className='a'><View className='iconfont iconw icon-wusunyinzhi' />{item.artist}</View>
                </View>
                <View className='iconfont iconb icon-yunhang' />
              </View>
            ))
          }
        </View>

      </View>
    </View>
  )
}
export default RecommendDetail
