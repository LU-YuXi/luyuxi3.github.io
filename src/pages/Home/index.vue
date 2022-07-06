<template>
  <div>
    <!--三级联动全局组件 三级联动已经注册为全局组件 ，因此不需要再次引入-->
    <TypeNav/>
    <Listcontainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <!-- floor自己在组件内部是没有发请求的，是父级组件给的 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
// import TypeNav from './TypeNav/index.vue';
// 引入其他组件
import Listcontainer from '@/pages/Home/Listcontainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from  '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import { mapState } from 'vuex';
export default {
    name: "",
    components: {
    Listcontainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
    
},
mounted(){
// 派发action获取floor数据
this.$store.dispatch("getFloorList");
// 获取用户信息在首页展示
this.$store.dispatch('getUserInfo');
},
computed:{
  ...mapState({
    floorList:(state)=>state.home.floorList,
  }),
},
}

</script>

<style scoped>

</style>
