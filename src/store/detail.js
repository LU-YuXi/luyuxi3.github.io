import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api";
// 封装游客身份模块uuid--》生成一个 随机字符串（不能变了）
import { getUUID } from "@/utils/uuid_token";
const state ={
    goodInfo:{},
    // 游客临时身份
    uuid_token:getUUID()
};
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo;
    }
};
const actions={
    // 获取产品信息的action
    async getGoodInfo ({commit},skuId){
      let result =  await reqGoodsInfo(skuId);
      if(result.code==200){
          commit('GETGOODINFO',result.data);
      }
    },
    // 将产品添加到购物车中
   async  addOrUpdateShopCart({commit},{skuId,skuNum}){
    //    加入购物车返回的结构
            let result=   await reqAddOrUpdateShopCart(skuId,skuNum);
        //  注意async函数执行放回的结果一定是   一个人Promise（要么成功，要么失败）
        if(result.code==200){
            // 返回成功的标记
            return "ok";
        }else{
            // 返回失败的标志
            return Promise.reject(new Error("faile"));
        }
    }
};
const getters ={
    // sate.goodInfo初始状态空对象，空对象的categoryView属性值为undefined
    // 路劲导航简化的数据
    categoryView(state){
        return  state.goodInfo.categoryView||{};
    },
    // 简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo||{};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[];
    }


};
export default{
    state,
    mutations,
    actions,
    getters
}