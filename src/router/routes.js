
// 引入路由组件
// import Home from '@/pages/Home'
// import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级目录
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
// 路由配置信息
export default [
  // 配置路由
  {
    path: "/center",
    component: Center,
    meta: { show: true },//  显示底部footer
    // 二级路由组件
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        // 重定向，就是如果我们去center页面，那就直接定位到myorder 
        path:"/center",
        redirect:'/center/myorder'
      }

    ]

  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },//  显示底部footer
    beforeEnter: (to, from, next) => {
      if(from.path == "/pay"){
        next();
      }else{
        next(false);
      }
    }

  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },//  显示底部footer
    beforeEnter: (to, from, next) => {
      if(from.path == "/trade"){
        next();
      }else{
        next(false);
      }
    }

  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },//  显示底部footer
  //  路由独享守卫
  beforeEnter: (to, from, next) => {
    // 去交易页面，必须从购物车而来
    if(from.path == "/shopcart"){
      next();
    }else{
      // 其他路由组件，停留在当前
      next(false);
    }

  }

  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true },//  显示底部footer


  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },//  显示底部footer


  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess,
    meta: { show: true },

  },
  {
    path: "/home",
    // 这种用法叫做路由懒加载
    component:()=>import("@/pages/Home"),
    meta: { show: true },

  },
  {
    path: "/search/:keyword?",
    component: ()=>import('@/pages/Search'),
    meta: { show: true },
    name: "search",
    //  路由组件不能传递props 数据
    // 布尔值写法：params
    // props:true
    // 对象写法：额外的给路由组件传递一些props
    // props:{a:1,b:2},
    // 函数写法params参数，query参数，通过props传递给路由组件。
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k };
    },
    //简写
    // props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
  {
    path: '*',
    redirect: "/home"
  },
]

