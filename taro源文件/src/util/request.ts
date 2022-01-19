import {axios} from 'taro-axios'
// 封装功能方法
type IMethod = 'GET'|'POST'|'DELETE'|'PUT'

const request = (url :string, params?:{[name:string]:any}, method:IMethod = 'GET',data?:any )=> axios({
    baseURL:'http://localhost:8888/OnlineMusic',
    timeout:10000,
    url,
    method,
    params,
    data,
  headers:{
    contentType:"application/json;charset=utf-8"
  }
  }).then(resp=>Promise.resolve(resp.data))
    .catch(err=>Promise.reject(err.message))
export default request
