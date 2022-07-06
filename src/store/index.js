// 最大的仓库
import Vue from 'vue';
import Vuex from 'vuex';
// 需要使用插件一次
Vue.use(Vuex);
//引入home|search模块的仓库
import home from "./home";
import search from "./search";
import detail from './detail';
import shopcart from "./shopcart";
import user from "./user";
import trade from './trade';
// 对外暴露store 类的一个实列
export default new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
})
