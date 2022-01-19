import {FC, useState} from "react";
import {Button, Text, View} from "@tarojs/components";
import {AtInput, AtMessage} from 'taro-ui'
import Taro from '@tarojs/taro'
import NavigationBar from "../../components/NavigationBar";
import {loginRequest} from '../../RouteInfo'
import './index.sass'
import useDidShow = Taro.useDidShow;

type userInfoType = {
  Uid:string ,
  Upassword:string
}
const Login: FC = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({Uid:'',Upassword:''});

  const login =async ()=>{
    const { Uid, Upassword } = userInfo
    //先验证手机不能为空
    if (Uid == '') {
      Taro.showToast({
        title: '请输入账号',
        icon: 'none'
      })
      return
    }
    //最后验证密码
    if (Upassword == '') {
      Taro.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return
    }

    try{
      const result = await loginRequest({Uid,Upassword})
      if (result.code === 200) {
        Taro.showToast({
          title: result.mes,
          icon: 'success'
        })
        //将用户信息存储到本地的storage中
        await Taro.setStorageSync('userInfo',result.user)
        console.log(Taro.getStorageSync('userInfo'))
        setTimeout(()=>Taro.switchTab({
          url: '/pages/Owner/index',
        }),1500)
      } else if (result.code === 400) {
        Taro.showToast({
          title: result.mes,
          icon: 'none'
        })
      } else if (result.code === 502) {
        Taro.showToast({
          title: result.mes,
          icon: 'none'
        })
      }
    }catch (e) {Taro.atMessage({'message':e,'type':'error'})}
  }

  useDidShow(()=>{
    const Uid = Taro.getCurrentInstance().router?.params.id
    Uid && setUserInfo({...userInfo,Uid})
  })


  return (
    <View className='Login_box'>
      <AtMessage />
      <NavigationBar BarText='登录页' backIcon />
      <View className='wrapper'>
        <View className='left-top-sign'>LOGIN</View>
        <View className='welcome'>
          请先登录!
        </View>
        <View className='input-content'>
          <View className='input-item'>
            <Text className='tit'>账号</Text>
            <AtInput
              className='input'
              type='text'
              name='Uid'
              placeholder='请输入账号'
              onChange={(value)=>setUserInfo(a=>({...a,Uid:value as string}))}
              value={userInfo.Uid as string}
            />
          </View>
          <View className='input-item'>
            <Text className='tit'>密码</Text>
            <AtInput
              className='input'
              type='password'
              name='Upassword'
              placeholder='请输入密码'
              onChange={(value)=>setUserInfo(a=>({...a,Upassword:value as string}))}
              value={userInfo.Upassword as string}
            />
          </View>
        </View>

        <Button className='confirm-btn' onClick={login}>登录</Button>
        <View className='forget-section'>
          忘记密码?
        </View>
      </View>
      <View className='register-section'>
        还没有账号?
        <Text onClick={()=>Taro.navigateTo({url:'/pages/Register/index'})}>马上注册</Text>
      </View>
    </View>
  )
}
export default Login
