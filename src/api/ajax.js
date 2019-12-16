// ajax请求

import axios from 'axios'
export default function ajax(url,data={},type='GET'){
  return new Promise (function(resolve,reject){
    let promise
    if(type==='GET'){
      //准备url
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key=>{
        dataStr += key + '=' +data[key] + '&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else {
      promise = axios.post(url,data)
    }
    promise.then(function(response){
      resolve(response.data)
    }).catch(function(error){
      reject(error)
    })
  })


}
