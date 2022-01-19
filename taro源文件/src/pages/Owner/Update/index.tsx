import {FC, ReactNode, useEffect, useState} from "react";
import {View, Text, Button} from "@tarojs/components";
import Taro from '@tarojs/taro'
import {
  AtActionSheet,
  AtActionSheetItem,
  AtAvatar,
  AtIcon, AtInput,
  AtModal,
  AtModalAction,
  AtModalContent,
  AtModalHeader
} from "taro-ui";
import NavigationBar from "../../../components/NavigationBar";
import './index.sass'
import {updateUser} from "../../../RouteInfo";

type ListType={
  name:string,
  value:ReactNode,
  clickEvent?:()=>void
}
type userInfoType = {
  Uid:string,
  avater_url:string,
  uname:string,
  sex:number
}
const UpdateComponent: FC = () => {
  const [UserInfo, setUserInfo] = useState<userInfoType>({Uid:'',avater_url:require('../../../accept/images/p1.jpg'),uname:'无心同学',sex:1});
  const [ActionSheetOpen, setActionSheetOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');

  const update =async (user: { Uid:string,Uname?:string,sex?:number,avater_url?:string })=>{
    try{
      const data = await updateUser(user);
      console.log(data)
      if(data>0) Taro.showToast({
        title:'操作成功',
        icon:'none'
      })
      else Taro.showToast({
        title:'操作失败',
        icon:'none'
      })
    }catch (e){Taro.atMessage({'message':e,'type':'error'})}
  }

  const changeAvater = ()=>{
    const user = Taro.getStorageSync('userInfo')
    Taro.chooseMessageFile({
      count:1,
      type:'image',
      success:res=>{
        setUserInfo(a=>({...a,avater_url:res.tempFiles[0].path}))
        // 再把资源上传到服务器
        Taro.uploadFile({
          url:'http://localhost:8888/OnlineMusic/User/fileUpload',
          filePath:res.tempFiles[0].path,
          name: 'file',
          formData:{Uid:user.uid,fileName:res.tempFiles[0].name},
          success: (resp)=>{
            const data = JSON.parse(resp.data)
            Taro.showToast({
              title:data.mes,
              icon:'none'
            })
            if(data.code==200){
              setUserInfo(value=>({...value,avater_url:data.path}))
              Taro.setStorage({
                key:'userInfo',
                data:{...user,avater_url:data.path}
              })}}})}})}

  const ListData:ListType[] = [
    {name:'头像',value:<AtAvatar className='avater' image={UserInfo.avater_url} />,clickEvent:changeAvater},
    {name:'昵称',value:UserInfo.uname,clickEvent:()=>{
        setName(UserInfo.uname)
        setModalOpen(true)
      }},
    {name:'性别',value:UserInfo.sex===0?'女':'男',clickEvent:()=>setActionSheetOpen(true)}
  ]
  const changeSex = (sex:number)=>{
    setActionSheetOpen(false)
    setUserInfo({...UserInfo,sex})
    Taro.showToast({title:'操作成功',icon:'success'})
  }

  useEffect(()=>{
    const user = Taro.getStorageSync('userInfo')
    user && setUserInfo({
      Uid:user.uid,
      avater_url:user.avater_url,
      uname:user.uname,
      sex:user.sex
    })
  },[])
  return (
    <View className='update_box'>
      <NavigationBar backIcon BarText='个人资料' BackgroundColor='white' fontColor='black' />
      <View className='List_box'>
        {
          ListData.map(item=>(
            <View className='ListItem' onClick={item.clickEvent}>
              <Text>{item.name}</Text>
              <View>
                {item.value}
                <AtIcon className='icon' value='chevron-right' size={28} />
              </View>
            </View>
          ))
        }
      </View>
      <AtModal isOpened={ModalOpen} onClose={()=>setModalOpen(false)}>
        <AtModalHeader>修改昵称</AtModalHeader>
        <AtModalContent>
          <AtInput
            name='name'
            value={name}
            onChange={a=>setName(a as string)}
            title='昵称'
            type='text'
            placeholder='请输入您的昵称'
          />
        </AtModalContent>
        <AtModalAction>
          <Button onClick={()=>setModalOpen(false)}>取消</Button>
          <Button onClick={()=>{
            setModalOpen(false)
            setUserInfo(value=>({...value,uname:name}))
            update({Uid:UserInfo.Uid,Uname:name})
            Taro.setStorage({
              key:'userInfo',
              data:{...Taro.getStorageSync('userInfo'),uname:name}
          })}}
          >确定</Button>
        </AtModalAction>
      </AtModal>
      <AtActionSheet
        isOpened={ActionSheetOpen}
        cancelText='取消'
        onClose={()=>setActionSheetOpen(false)}
        onCancel={()=>setActionSheetOpen(false)}
      >
        <AtActionSheetItem onClick={()=>{
          changeSex(1)
          update({Uid:UserInfo.Uid,sex:1})
          Taro.setStorage({
            key:'userInfo',
            data:{...Taro.getStorageSync('userInfo'),sex:1}
          })
        }}
        >
          男
        </AtActionSheetItem>
        <AtActionSheetItem onClick={()=>{
          changeSex(0)
          update({Uid:UserInfo.Uid,sex:0})
          Taro.setStorage({
            key:'userInfo',
            data:{...Taro.getStorageSync('userInfo'),sex:0}
          })
        }}
        >
          女
        </AtActionSheetItem>
      </AtActionSheet>
    </View>
  )
}
export default UpdateComponent
