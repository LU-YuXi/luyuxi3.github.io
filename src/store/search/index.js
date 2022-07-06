import { reqGetSearchInfo } from "@/api";
// search模块的小仓库
// state存储数据库的地方
const state = {
    // 仓库初始状态
    searchList:{},
};
// mutations修改state的唯一手段
const mutations = {
    GetSEARCHLIST(state,searchList){
        state.searchList=searchList;
    },
};
// action处理action，可以书写自己的业务逻辑，可以处理异步
const actions = {
    async getSearchList({commit},params={}){
        // // 当前的这个接口（获取搜索模块的数据）给服务器传递一个默认参数（至少是一个空对象）不然获取失败
        // params这个形参：是当前用户派发   action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        if(result.code==200){
            commit('GetSEARCHLIST',result.data);
        }
    },
};
// getters理解为计算属性，用于简化仓库数据,让组件获取仓库数据更加方便      到44
const getters = {
    // 当前的形参state，是当前仓库的state，并非大仓库中的形参
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
            return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};
// 对外暴露store 类的一个实列
export default {
    state,
    mutations,
    actions,
    getters
}
