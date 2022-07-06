<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <transition name="sort">
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in CategoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <!-- 二级 三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <!--  三目运算符 -->
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="(c2, index) in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em
                        v-for="(c3, index) in c2.categoryChild"
                        :key="c3.categoryId"
                      >
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">雨晰购超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">天猫</a>
      </nav>
    </div>
  </div>
</template>

<script>
// 引入lodash(节流比如一秒钟中后执行在这里throttle是默认暴露的所以不用加{})
import throttle from "lodash/throttle";
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      // 存储鼠标移动哪一个一级分类
      currentIndex: -1,
      show:true
    };
  },
  // 组件挂载完毕。可以向服务器发送请求
  mounted() {
    // 通知vuex发送请求，获取数据 存储雨仓库中
    // this.$store.dispatch("CategoryList");
    // 当组件挂载完毕，让show属性变为false
    // 如果不是home组件将typeNav隐藏
    if(this.$route.path!='/home'){
      this.show=false;
    }
  },
  computed: {
    ...mapState({
      // 右侧需要的一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数state，其实即为大仓库的数据
      CategoryList: (state) => {
        return state.home.CategoryList;

      },
    }),
  },
  methods: {
    // 鼠标经过修改响应式数据currentIndex属性
    // 节流操作代码 注意切记不要用箭头函数可能会出现上下this问题
    changeIndex: throttle(function (index) {
      //    index:鼠标移动上去某一个一级分类的元素的索引值
      this.currentIndex = index;
    }, 100),

    //  一级分类鼠标移出事件回调
    leaveIndex() {
      // 鼠标移出变为-1
      this.currentIndex = -1; //到22
    },
    goSearch(event) {
      //event.target:获取到的是出发事件的元素(div、h3、a、em、dt、dl)
      let element = event.target;
      // console.log(element.dataset)
      //节点有一个dataset属性，可以获取节点自定义属性，属性值
      //  给a标签添加自定义属性data-categoryName,全部的字标签当中只有a标签带有自定义属性，别的标签名字----dataset纯属扯淡
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      if (categoryname) {
        //   整理路由跳转的参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        // 一级 二级，三级分类
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
      // 如果路由跳转的时候。带有params参数，稍带传递过去
      if(this.$route.params){
        location.params =this.$route.params;
        // 动态给location配置对象添加query属性
        location.query= query;
        //路由跳转
        this.$router.push(location);
      }
      }
    },
    // 当鼠标进入的时候让商品分类列表展示
    enterShow(){
      this.show=true;
    },
    // 当鼠标离开的时候让商品分类列表隐藏
    leaveShow(){
      this.currentIndex = -1;
      // 如果是search组件才会执行
      if(this.$route.path!='/home'){
        this.show =false;
      }
    }

  },
};
</script>

<style scoped  lang="less">
.type-nav {
  border-bottom: 2px solid #9e3c30;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #9e3c42;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //     .item-list {
          //         display: block;
          //     }
          // }
        }
        .cur {
          transition: all 0.5s linear;
          background-color: #9e3c30;
        }
      }
    }
    //过渡动画的样式
    //过渡动画开始状态（进入）
    .sort-enter {
      height: 0px;
    }
    // 过渡动画结束状态（进入）
    .sort-enter-to {
      height: 461px;
    }
    // 定义动画时间、速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
