// home模块的小仓库
import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api";
// state存储数据库的地方
const state = {
    // state中的数据默认初始值不要瞎写 服务器返回对象，服务器返回数组（根据接口的返回值初始化的
    CategoryList:[],
    // 轮播图的数
    bannerList:[],
    // floor的数据
    floorList:[]
};
// mutations修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,CategoryList){
             state.CategoryList =CategoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    GETFLOORLIST(state,floorList){
     state.floorList=floorList
    }
};
// action处理action，可以书写自己的业务逻辑，可以处理异步
const actions = {
    // 通过api里面的接口函数调用，向服务器发送请求，获取服务器的数据。
    async CategoryList({commit}) {
        let result = await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }       
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
        let result =await reqGetBannerList();
        if(result.code==200){
            commit("GETBANNERLIST",result.data);
        }
      
    },
    // 获取floor数据
    async getFloorList({commit}){
       let result  = await reqFloorList();
       if(result.code==200){
        //    提交mutation
        commit("GETFLOORLIST",result.data);
    }
    }
};
// getters理解为计算属性，用于简化仓库数据,让组件获取仓库数据更加方便
const getters = {};
// 对外暴露store 类的一个实列
export default {
    state,
    mutations,
    actions,
    getters
}
