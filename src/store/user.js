// 登录与注册的模块
import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout} from '@/api';
import {setToken,getToken,removeToken} from '@/utils/token';
const state={
    code:"",
    token:getToken(),
    userInfo:{}
};
const mutations={
    GETCODE(state,code){
        state.code =code;
    },
    USERLOGIN(state,token){
        state.token =token;
    },
    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo;
    },
    // 清除本地得数据
    CLEAR(state){
        // 把仓库中相关用户学校清除
        state.token="";
        state.userInfo={};
        // 把本地存储清除
        removeToken();
    }

};
const actions={
    //  获取验证码 
 async getCode({commit},phone){
      let result =await reqGetCode(phone); 
      if(result.code==200){
        // console.log(result)
          commit("GETCODE",result.data)
          return "ok";
      }else{
          return  Promise.reject(new Error('faile'))
      }
    },
    // 用户注册
    async userRegister({commit},user){
        let result =await reqUserRegister(user);
        if(result.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 登录
  async userLogin({commit},data){
    let result =await reqUserLogin(data);
    //    服务器下发token   用户唯一标识符（uuid）
    // 以后经常通过token找服务器要用户数据进行展示
    if(result.code==200){
        // 用户登录成功，已经获取到token
        commit("USERLOGIN",result.data.token);
        // 需要持久化存储token
        // localStorage.setItem("TOKEN",result.data.token   )
        setToken(result.data.token);
        return 'ok';
    }else{
        return Promise.reject(new Error('faile'));
    }
   },
//    获取用户信息
async getUserInfo({commit}){    
    let result = await reqUserInfo();
    if(result.code==200){
        commit("GETUSERINFO",result.data);
        return 'ok';    
    }
    else{
        return Promise.reject(new Error('faile'));
    }
},
// 退出登录
 async userLogout({commit}){
    //  只是向服务器发起一次请求，通知服务器清除tkoen
   let result=  await  reqLogout();
//    action里面不能操作state，提交mutation修改state
   if(result.code==200){
       commit('CLEAR');
       return 'ok';
   }else{
       return Promise.reject(new Error('faile'));
   }

}

};
const getters={};

export default{
    state,
    mutations,
    actions,
    getters
}