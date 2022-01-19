import {FC, useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {View} from "@tarojs/components";
import py from "wl-pinyin"
import {findAllRecommendSong} from "../../RouteInfo";
import Indexes from "../../components/Indexes";
import NavigationBar from "../../components/NavigationBar";
import './index.sass'

type RecommendType = {
  rid:string,
  name:string,
  img_url:string
}
type DataListType = {
  title:string,
  key:string,
  items:{name:string,img?:string,clickEvent?:(...value)=>void}[],
}

const MoreSongSheet: FC = () => {
  const list:DataListType[] = [
    {
      title: 'A',
      key: 'A',
      items:[],

    },
    {
      title: 'B',
      key: 'B',
      items: []

    },
    {
      title: 'C',
      key: 'C',
      items: []

    },
    {
      title: 'D',
      key: 'D',
      items: [],

    },
    {
      title: 'E',
      key: 'E',
      items: []

    },
    {
      title: 'F',
      key: 'F',
      items: []

    },
    {
      title: 'G',
      key: 'G',
      items: [],

    },
    {
      title: 'H',
      key: 'H',
      items: []

    },
    {
      title: 'I',
      key: 'I',
      items: []

    },
    {
      title: 'J',
      key: 'J',
      items: [],

    },
    {
      title: 'K',
      key: 'K',
      items: []

    },
    {
      title: 'L',
      key: 'L',
      items: []

    },
    {
      title: 'M',
      key: 'M',
      items: []

    },
    {
      title: 'N',
      key: 'N',
      items: []

    },
    {
      title: 'O',
      key: 'O',
      items: []

    },
    {
      title: 'P',
      key: 'P',
      items: []

    },
    {
      title: 'Q',
      key: 'Q',
      items: [],
    },
    {
      title: 'R',
      key: 'R',
      items: []
    },
    {
      title: 'S',
      key: 'S',
      items: [],

    },
    {
      title: 'T',
      key: 'T',
      items: [],
    },
    {
      title: 'U',
      key: 'U',
      items: []

    },
    {
      title: 'V',
      key: 'V',
      items: []

    },
    {
      title: 'W',
      key: 'W',
      items: [],

    },
    {
      title: 'X',
      key: 'X',
      items: [],

    },
    {
      title: 'Y',
      key: 'Y',
      items: [],

    },
    {
      title: 'Z',
      key: 'Z',
      items: [],

    },
    {
      title: '#',
      key: '#',
      items: []

    },
  ]

  const [RecommendSongList, setRecommendSongList] = useState<DataListType[]>();

  // 获取到所有的推荐歌单
  const getAllRecommendSong =async ()=>{
    try{
      const data:RecommendType[] = await findAllRecommendSong()
      data.forEach(item=>{
        const title = py.getFirstLetter(item.name.slice(0,1))
        for(let i=0;i<list.length;i++){
          // 拼音匹配上啦就push，到最后都没的就push'到#
          if(i<list.length-1){
            if(title == list[i].title){
              list[i].items.push(
                {name:item.name,
                  img:item.img_url,
                  clickEvent:()=>Taro.navigateTo({url:`/pages/RecommendDetail/index?rid=${item.rid}&recommend=${JSON.stringify(item)}`})
                })
              break}
          }else{
            list[list.length-1].items.push(
              {name:item.name,
                img:item.img_url,
                clickEvent:()=>Taro.navigateTo({url:`/pages/RecommendDetail/index?rid=${item.rid}&recommend=${JSON.stringify(item)}`})
              })
            break
          }
        }
      })
      setRecommendSongList(list)
    }catch (e) {Taro.atMessage({'message':e,'type':'error'}) }
  }

  useEffect(() => {
    getAllRecommendSong()
  }, []);

  return (
    <View className='MoreSongSheet_box'>
      <NavigationBar backIcon BarText='推荐歌单' />
      {RecommendSongList && <Indexes data={RecommendSongList} />}
    </View>
  )
}
export default MoreSongSheet
