import {FC, useEffect, useRef, useState} from "react";
import {Image, ScrollView, View} from "@tarojs/components";
import Taro from "@tarojs/taro";
import './index.sass'
import './IconfontStyle.css'
import usePageScroll = Taro.usePageScroll;

interface IProps{
  data:DataListType[],
  enableCustomChild?:boolean
}
type DataListTypeWithColor = {
  title:string,
  color:string,
  key:string,
  items:{name:string,img?:string,clickEvent?:(...value)=>void}[],
}
type DataListType = {
  title:string,
  key:string,
  items:{name:string,img?:string,clickEvent?:(...value)=>void}[],
}
// ScrollView 刚开始触摸的地方
let ScrollViewTouchStart = 0
// 判断是否 接近 底部的 阈值
let Bottom_Threshold = 0
// 所有字母 距顶高度
const AllLetterTop = []
// menu刚开始触摸的地方
let MenutouchStart = 0
// 每个字母的高度
let letterHeight = 0
// ScrollView整体的高度
let ScrollViewHeight = 0
const Indexes: FC<IProps> = (props) => {
  // 存放所有ScrollView的indexes_list节点的 初始scrollTop距离
  const [AllIndexesListTop, setAllIndexesListTop] = useState<number[]>();
  // 判断是否到达 top 或者 bottom的flag
  const [flag, setFlag] = useState<{bottom:boolean,top:boolean}>({bottom:false,top:true});
  // ScrollView 在Y轴的移动距离
  const [TransformY, setTransformY] = useState(0);
  // 当前所选择的 字母对象
  const [SelectedLetterObj, setSelectedLetterObj] = useState<{key:string,top:number}>({key:'A',top:0});
  // 提示的 展示情况
  const [TipDisplay, setTipDisplay] = useState('none');
  // 数据
  const [DataList, setDataList] = useState<DataListTypeWithColor[]>([]);
  const ref = useRef<any>();

  const screenHeight = Taro.getSystemInfoSync().screenHeight

  // ScrollView 的手指滑动事件
  const ScrollViewTouchMove = e => {
    let dist = e.touches[0].clientY - ScrollViewTouchStart
    if(flag.bottom == true){
      if(dist>0) dist = 0
      else if(dist < -100)dist = -100 + (dist+100) / 6
    }else if(flag.top == true){
      if(dist<0) dist = 0
      else if(dist >= 108) dist = 108 + (dist-108) / 6
    }
    // 计算 两次变化的差值
    const DistFlag = Math.abs(dist-TransformY)
    // 如果突然变化太大了要让他 以(14/DistFlag)的比例自适应缩小一些 经过测试再乘以0.3-0.7之间的随机数会让效果更好一些
    if(DistFlag>35) dist = TransformY + dist*(Math.random()*0.4+0.3)*(14/DistFlag)
    setTransformY(dist)
  }

  // 监听 页面滑动事件  上下拉到底弹起
  usePageScroll(res=>{
    // 只有AllIndexesListTop 存在 才有后续的操作
    if(AllIndexesListTop){
      // 如果ScrollView的高度 > 屏幕高度
      if( ScrollViewHeight > screenHeight){
        // Bottom_Threshold ：判断是否 接近 底部的 阈值 , 只需要赋值一次 因为lastIndexesTop和screenHeight都是不变的
        if(Bottom_Threshold == 0 )  Bottom_Threshold = ScrollViewHeight - screenHeight*0.95
        // 此时为 顶部
        if(res.scrollTop==0) setFlag({...flag,top:true})
        // 此时在底部
        else if(res.scrollTop>=Bottom_Threshold) {
          const query = Taro.createSelectorQuery()
          query
            .select('.ScrollView_View')
            // 如果ScrollView距底距离小于屏幕高度 说明 此时到达了底部
            // @ts-ignore
            .boundingClientRect(res=> res.bottom-8 < screenHeight && setFlag({...flag,bottom:true}) )
            .exec()
        }
        else setFlag({bottom:false,top:false})
      }
      // 如果最后一个元素的 距顶距离 < 屏幕高度  则即到了顶部 也到了底部
      else setFlag({top:true,bottom:true})
    }
  })

  useEffect(() => {
    // 为传入的数据 添加color属性
    setDataList(props.data.map(item=> ({...item,color:'none'})))
    // 头部导航栏的高度
    let ScrollViewTop = 0
    setTimeout(()=>{
      const query = Taro.createSelectorQuery()
      // 查询到id=aaa的节点，也就是ScrollView，让它直接滑动到底部
      query
        .select('.ScrollView_View')
        // @ts-ignore
        .boundingClientRect(res=>  {
          ScrollViewHeight = res.height
          ScrollViewTop = res.top
        } )
        .exec()
      // 如果 ScrollView 存在子元素
      if(ref.current.childNodes[0]){
        // 先根据ref 获取到 ScrollView下子元素的class，然后根据class属性 查询到节点信息，将每个节点的距顶高度存到AllIndexesListTop中
        const ScrollViewChildNode_className = ref.current.childNodes[0].props.class
        const query1 = Taro.createSelectorQuery()
        query1
          .selectAll(`.${ScrollViewChildNode_className}`)
          // 由于自定义导航栏的原因 所以获取到的top直接到了最顶部，所以需要减去 头部导航栏的高度 才是可视区域
          // @ts-ignore
          .boundingClientRect(res=> setAllIndexesListTop(res.map(item=>item.top-ScrollViewTop)) )
          .exec()
      }else throw Error('没有子节点的信息')

      const query2 = Taro.createSelectorQuery()
      query2
        .selectAll('.letter')
        // @ts-ignore
        .boundingClientRect(res=>{
          letterHeight = res[0].height
          // @ts-ignore
          AllLetterTop.push(...res.map(item=>item.top))
        })
        .exec()
    },200)
  } , []);

  // 点击改变列表scrollTop的scrollTop
  const changePosition = (key:string|number) => {
    // 只有点击有子元素的才滑动
    if(DataList[DataList.findIndex(item=>item.key===key)].items.length>0) AllIndexesListTop && Taro.pageScrollTo({scrollTop: AllIndexesListTop[DataList.findIndex(item=>item.key===key)],duration: 0})
  }

  // 字母长按的 特效
  const letterLongPress = (key:string)=>{
    if(key!=''){
      const index = DataList.findIndex(item=>item.key===key)
      // 显示提示
      setTipDisplay('flex')
      // 修改选中的元素key和top
      setSelectedLetterObj({key:key,top:AllLetterTop[index]})
      // 将当前 长按的字母 亮色
      setDataList(item=>{
        item[index].color = '#09c162'
        return item
      })
      changePosition(key)
    }
  }

  // 手指触碰结束后 触发的事件
  const letterTouchEnd = ()=>{
    setTipDisplay('none');
    setSelectedLetterObj({...SelectedLetterObj})
    setDataList(item=> item.map(item=>({...item,color:'none'})) )
    // 每次滑动结束，都要把MenutouchStart重置
    MenutouchStart=0
  }

  // Menu区域中 手指滑动的事件  判断手指当前属于哪个字母的区域，并把特效以及提示都显示
  const letterTouchMove = e=>{
    // 获取当前滑动的 clintY
    const loc = e.changedTouches[0].clientY
    // 当变化的距离 > 每个字母的固定高度后 (说明滑动到下一个字母区域中了)
    if(Math.abs(e.changedTouches[0].clientY - MenutouchStart) >= letterHeight){
      // 手指滑动 所处的字母区域的索引
      let Located_Index = -1
      try{
        AllLetterTop.forEach((item,index,arr)=> {
          // 当匹配成功的时候，抛出异常跳出forEach
          if(loc <= AllLetterTop[0] ){Located_Index = 0 ;throw new Error("breakForEach");}
          if (loc >= arr[arr.length - 1]) {Located_Index = arr.length - 1;throw new Error("breakForEach");}
          if (loc >= item && loc < arr[index + 1]) {Located_Index = index;throw new Error("breakForEach");}
        })
      }catch (e) { if (e.message !== "breakForEach") throw e }
      // 只要 Located_Index 改变不为初始值-1了，就可以执行
      Located_Index != -1 && letterTouchEnd()
      // 当前选中的元素的 key
      const Located_key = DataList[Located_Index].key
      // 列表中 第一个key非空的元素的 key
      const keyNotNullIndex = DataList.findIndex(item=>item.key!='')
      // 如果他的key==‘’，那就用它的下一位的key
      Located_Index != -1 && letterLongPress(Located_key==''?DataList[keyNotNullIndex].key:Located_key)
      // 滑到下一个模块之后，把当前的 clintY赋给 MenutouchStart
      MenutouchStart = loc
    }
  }

  return (
    <View className='page_box'>

      <View className='tip' style={{top:SelectedLetterObj.top-24+'px',display:TipDisplay}}>
        <View className='bubble iconfont icon-qipao-copy' />
        <View className='font'>{SelectedLetterObj.key}</View>
      </View>
      {/*遍历右侧索引栏*/}
      <View className='menu_box'>

        { DataList.map(item=><View
            className='letter'
            style={{backgroundColor:item.color,color:item.color=='none'?'black':'white'}}
            key={item.key}
            onClick={()=>changePosition(item.key)}
            onLongPress={()=>letterLongPress(item.key)}
            onTouchEnd={()=>letterTouchEnd()}
            // 只要catchMove这个属性存在 catchtouchmove 代替 bindtouchmove 进行事件绑定，从而获得阻止滑动穿透的能力。
            catchMove
            onTouchMove={letterTouchMove}
            onTouchStart={ e=> MenutouchStart = e.changedTouches[0].clientY }
          > {item.key} </View>
        ) }
      </View>

      <View className='ScrollView_View'>
        <ScrollView
          className='ScrollView_box'
          ref={ref}
          style={{transform:`translateY(${TransformY}px)`}}
          enableFlex
          scrollY
          onTouchStart={e=>ScrollViewTouchStart=e.touches[0].clientY}
          onTouchMove={ScrollViewTouchMove }
          onTouchEnd={()=>setTransformY(0)}
          scrollAnchoring
        >
          {props.enableCustomChild==true?
            props.children :
            DataList.map(item=><View className='indexes_list' id={item.key}>
              {/* 存在items子元素才渲染，否则为空 */}
              {item.items.length>0 &&
              <View className='indexes_list_innerbox'>
                {/* 有一种需求就是不需要 title的 */}
                {item.title==''?'':<View className='title'>{item.title}</View>}
                <View className='list'>
                  {
                    item.items && item.items.map(item2=>(
                      <View
                        className='list_item'
                        // 展示点击态
                        hoverStartTime={50}
                        hoverStayTime={200}
                        hoverClass='clickStyle'
                        onClick={item2.clickEvent}
                      >
                        {item2.img?<Image src={item2.img} />:''}

                        <View className='list_item_container'>
                          {item2.name}
                        </View>
                      </View>
                    ))
                  }
                </View>
              </View>}
            </View> )}
        </ScrollView>
      </View>
    </View>
  )
}
export default Indexes
