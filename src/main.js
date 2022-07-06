import Vue from 'vue'
import App from './App.vue'
// 引入仓库
import store from '@/store';
import router from '@/router';//引入路由
// 三级联动组件--全局组件
import TypeNav from '@/components/TypeNav';
import Pagination from '@/components/Pagination';
//第一个参数：全局组件的名字 第二个参数：哪一个 组件
import Carsousel from "@/components/Carsousel";
import {MessageBox} from 'element-ui';
//引入MockServer.js----mock数据
import "@/mock/mockServe";
// 引入swiper样式
// 统一接收api文件夹里面全部请求函数
import * as API from '@/api';
import "swiper/css/swiper.css";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carsousel.name,Carsousel);
Vue.component(Pagination.name,Pagination);  
//注册全局组件
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// import atm from '@/assets/1.gif'
// // 引入插件
// import VueLazyload from 'vue-lazyload';
// //注册插件
// Vue.use(VueLazyload,{ 
//   //懒加载默认的图片
//   loading:atm
// });
// 引入表单验证插件
import "@/plugins/validate";
new Vue({
  render: h => h(App),
    // 配置全局事件总线$bus 这里this指的是VM
beforeCreate() {                      
  Vue.prototype.$bus =this;
  Vue.prototype.$API =API;
},
  // 注册路由：底下的写法kv一致省略v【router小写的】
  router,
  // 注册仓库组件实列的圣上多了一个属性 $store
  store,

}).$mount('#app')
