import {FC, useState} from "react";
import {Button, Input, Picker, View} from "@tarojs/components";
import {AtList, AtListItem, AtMessage} from "taro-ui";
import Taro from '@tarojs/taro'
import NavigationBar from "../../components/NavigationBar";
import './index.sass'
import {register} from "../../RouteInfo";


type a = "number" | "text" | "idcard" | "digit" | 'password'
type formItemType = {
  icon:string,
  placeholder:string,
  type: a,
  name:string
}

const Register: FC = () => {
  const FormList:formItemType[] = [
    {icon:'icon-yonghu',placeholder:'用户名',type:'text',name:'name'},
    {icon:'icon-mima',placeholder:'密码',type:'password',name:'password'},
  ]
  const [UserForm, setUserForm] = useState<{name:string,password:string,sex:number}>({name:'',password:'',sex:-1});

  const onRegister =async ()=>{
    if(UserForm.name==''){
      Taro.showToast({
        title:'请输入名字',
        icon:'none'
      })
    }else if(UserForm.password==''){
      Taro.showToast({
        title:'请输入密码',
        icon:'none'
      })
    }else if(UserForm.sex==-1){
      Taro.showToast({
        title:'请选择性别',
        icon:'none'
      })
    }else{
      try{
        const data = await register({Uname:UserForm.name,Upassword:UserForm.password,sex:UserForm.sex})
        console.log(data)
        if(data=='-1') Taro.atMessage({'message':'注册失败','type':'error'})
        else {
          Taro.showModal({
            confirmText:'确定',
            content:`注册成功!请牢记您的账号为${data}`,
            title:'系统提示',
            success: ()=> Taro.redirectTo({url:`/pages/Login/index?id=${data}`})
          })
        }
      }catch (e){Taro.atMessage({"message":e,'type':'error'})}
    }
  }

  return (
    <View className='Register_box'>
      <NavigationBar BarText='注册页' backIcon />
      <AtMessage />
      <View className='top_logo'>
        <View className='iconfont icon icon-QX-kuwoyinle' />
        <View>无心音乐</View>
      </View>
      <View className='form_box'>
        {
          FormList.map(item=>(
            <View className='form_item'>
              <View className={`iconfont icon2 ${item.icon}`} />
              <Input
                type={item.type as any}
                placeholder={item.placeholder}
                onInput={item2=>setUserForm({...UserForm,[item.name]:item2.detail.value})}
              />
            </View>
          ))
        }
        <View className='form_item'>
          <View className='iconfont icon2 icon-xingbie' />
          <Picker className='picker' mode='selector' range={['女','男']} onChange={value=>setUserForm({...UserForm,sex:Number(value.detail.value)})} >
            <AtList>
              <AtListItem
                customStyle={{color:UserForm.sex==-1?'#b8b8b8':'black'}}
                title={UserForm.sex===-1?'性别':UserForm.sex===0?'女':'男'}
              />
            </AtList>
          </Picker>
        </View>

        <View className='btn_box'>
          <Button className='register_btn' onClick={onRegister}>注册</Button>
          <Button className='chongzhi' onClick={()=>setUserForm({name:'',password:'',sex:-1})}>重置</Button>
        </View>
      </View>
    </View>
  )
}
export default Register
