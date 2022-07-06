//对于axios进行二次封装
import axios from "axios"; 
// 引入进度条
import nprogress  from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// request就是axios,只不过稍微配置一下
const requests = axios.create({
    // 配置对象
  //基础路径发送请求的时候路径当中会出现api
  baseURL: "/mock",
  //请求不能超过5S
  timeout: 5000,
});

//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
// config:对象配置,对象里面有一个属性很重要 headers请求头
nprogress.start();
  return config;
});

// 响应拦截器
requests.interceptors.response.use((res) =>{
    // 成功的回调函数：服务器相应的数据回来以后，响应拦截器可以检测到，可以做一些事
    nprogress.done();
    return res.data;
},(error)=>{
    // 响应失败的回调函数。
    return Promise.reject(new Error('faile'));
});
// 对外暴露  
export default requests;

