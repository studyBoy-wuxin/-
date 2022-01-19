import {axios} from "taro-axios";
import request from "../util/request";
import {Music} from "../pages/Admin";


// User用户管理模块
export const loginRequest = (params:{Uid:string,Upassword:string})=>request('/User/login',params,'POST')
export const updateUser = (params:{Uid:string,Uname?:string,sex?:number,avater_url?:string})=>request("/User/updateUser",params,'POST')
export const register = (params:{Uname:string,Upassword:string,sex:number})=>request('/User/register',params,'POST')

// Banner 头部横幅管理区
export const findAllBanner = ()=>request('/Banner/findAllBanner')



// RecommendSong 推荐歌单管理区
export const findAllRecommendSong = ()=>request('/RecommendSong/findAllRecommendSong')


// Recommend_Music 推荐歌曲管理区
export const findMusicByrid = (params:{rid:string})=>request('/Recommend_Music/findMusicByrid',params)



//  music音乐管理区
export const findMusicByid = (params:{mid:string})=>request('/Music/findMusicByid',params)
export const findMusicByName = (params:{name:string})=>request('/Music/findMusicByName',params)
export const insertMusic = (data:Music[])=>request("/Music/insertMusic",{},'POST',data)
export const text = (data:Music[])=>request('/Music/text',{},'POST',data)

// 查找榜音乐的信息
export const findMusicByBangidList = (params:{BangidList:string})=>request('/Music/findMusicByBangidList',params)




// Bang 排行榜管理区
export const findAllBang = ()=>request('/Bang/findAllBang')





// Bang_Music 排行榜音乐管理区


// Love_Music 收藏音乐管理区
export const insertLoveMusic = (params:{mid:string,uid:string})=>request('/Love_Music/insertLoveMusic',params)
export const removeLoveMusic = (params:{mid:string,uid:string})=>request('/Love_Music/removeLoveMusic',params)
export const findLoveMusicByUid = (params:{uid:string})=>request('/Love_Music/findLoveMusicByUid',params)
export const findNumByUidAndMid = (params:{mid:string,uid:string})=>request('/Love_Music/findNumByUidAndMid',params)

// 网易搜索接口
export const getAudioURLByID = (id)=> axios({
  timeout:5000,
  url:'https://api.imjad.cn/cloudmusic',
  method:'get',
  params:{type:'song',id:id}
}).then(resp=>Promise.resolve(resp.data.data[0].url))
  .catch(err=>Promise.reject(err.message))

export const SearchMusicBy163 = (searchValue:string|number)=>axios({
  timeout:5000,
  url:'http://music.163.com/api/search/get/web',
  method:'get',
  params:{s:searchValue,type:1}
}).then(  resp=>Promise.resolve(resp.data.result))
  .catch(err=>Promise.reject(err.message))


