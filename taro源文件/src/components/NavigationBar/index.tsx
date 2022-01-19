import {FC, useEffect, useState} from "react";
import {View,Navigator} from "@tarojs/components";
import Taro from '@tarojs/taro'
import {AtIcon, AtSearchBar} from 'taro-ui'
import './index.sass'
import './IconfontStyle.css'

interface IProps{
  closeIcon?:boolean,
  homeIcon?:boolean,
  backIcon?:boolean,
  searchBar?:boolean,
  onSearchChange?:(value:string, event:Object)=>void,
  onActionClick?:()=>void,
  BarText?:string,
  searchPlaceholder?:string,
  searchValue?:string,
  onClear?:() => void,
  BackgroundColor?:string,
  fontColor?:string,
  fontsize?:number|string,
  icon?:{value:string,size?:string|number,color?:string,onIconClick:()=>void}

}

//自定义导航栏
const NavigationBar:FC<IProps> = (props:IProps)=>{
  const [Delta, setDelta] = useState(0);
  const [IconFontsize, setIconFontsize] = useState(0);
  const [BarHeight, setBarHeight] = useState(0);
  const [MarginTop, setMarginTop] = useState(0);
  const [fontboxWidth, setFontboxWidth] = useState(0);

  useEffect(() => {
    const a = Taro.getMenuButtonBoundingClientRect()
    //获取到系统的信息，便于计算导航栏
    Taro.getSystemInfo({
      success:res => {
        const marginTop = res.statusBarHeight
        const barheight = res.statusBarHeight+ a.height + (a.top - res.statusBarHeight) * 2
        let l:number
        if(!props.closeIcon&&!props.backIcon&&!props.homeIcon&&!props.icon) l=a.left*(1-0.05)
        else l = a.left*(1-0.18)
        setFontboxWidth(l)
        setBarHeight(barheight)
        setMarginTop(marginTop)
        setIconFontsize(a.height/2+2)
        setDelta(Taro.getCurrentPages().length-1)
      }
    })
  }, []);

  return (
    <View className='NBar_father' style={{minHeight:BarHeight,width:'100%'}}>
      <View className='NBar_box' style={{backgroundColor:props.BackgroundColor}}>
        <View className='icon_box' style={{marginTop:MarginTop,height:BarHeight-MarginTop}}>
          {props.closeIcon?<Navigator openType='exit' target='miniProgram' className='iconfont icon-guanbi closeIcon' style={{fontSize:IconFontsize,color:props.fontColor}} />:''}
          {props.homeIcon?<Navigator openType='navigateBack' delta={Delta} className='iconfont icon-home closeIcon' style={{fontSize:IconFontsize,color:props.fontColor}} />:''}
          {props.backIcon?<Navigator openType='navigateBack' delta={1} className='iconfont icon-back closeIcon' style={{fontSize:IconFontsize,color:props.fontColor}} />:''}
          {props.icon?
              <AtIcon
                customStyle={{fontSize:IconFontsize}}
                className='closeIcon'
                value={props.icon.value}
                size={props.icon.size?props.icon.size:'30'}
                color={props.icon.color?props.icon.color:'white'}
                onClick={props.icon.onIconClick}
              />:''}
        </View>
        <View
          className='font_box'
          style={{
            marginTop:MarginTop,
            fontSize:props.fontsize?props.fontsize:IconFontsize/1.3,
            right:props.searchBar?fontboxWidth===Taro.getMenuButtonBoundingClientRect().left*(1-0.05)?'30%':'20%':0 ,
            width:props.searchBar?fontboxWidth:'60%',
            color:props.fontColor,
          }}
        >

          {props.searchBar?
            <AtSearchBar
              className='search'
              customStyle={{backgroundColor:props.BackgroundColor}}
              maxLength={40}
              value={props.searchValue?props.searchValue:''}
              onChange={(value:string, event:Object)=>{props.onSearchChange && props.onSearchChange(value,event)}}
              actionName='搜索'
              placeholder={props.searchPlaceholder}
              onActionClick={props.onActionClick}
              onClear={props.onClear}
            />:props.BarText}
        </View>
      </View>
    </View>
  )
};
NavigationBar.defaultProps = {
  BarText:'首页',
  closeIcon:false,
  homeIcon:false,
  backIcon:false,
  searchBar:false,
  BackgroundColor:'#d43c33',
  fontColor:'white'
}

export default NavigationBar
