<template>
  <div>
    <Header></Header>
<!-- 书写路由组件出口的地方 -->
   <router-view></router-view>
   <!-- 在home，search是显示的，在登录，注册隐藏 -->
   <Footer v-show="$route.meta.show"></Footer>
   </div>
</template>

<script>
// 引入
import Header from './components/Header'
import Footer from './components/Footer';
export default {
name:'',
components:{
  Header,
  Footer
},
mounted(){
  // 派发一个action 获取  商品分类三级列表数据
   this.$store.dispatch("CategoryList");
}
}

</script>

<style scoped>

</style>
