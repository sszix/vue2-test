<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex">
        <h2 class="all" @mouseenter="enterShow">全部商品分类</h2>
        <transition name="sort">
          <div v-show="show" class="sort">
            <!--利用事件委派-->
            <div class="all-sort-list2" @click="goSearch">
              <!--鼠标经过加类名-->
              <div
                  v-for="(c1, index) in categoryList"
                  :key="c1.categoryId"
                  :class="{cur:currentIndex==index}"
                  class="item"
              >
                <!--获取鼠标经过的信息-->
                <h3 @mouseenter="enterIndex(index)">
                  <a
                      :data-category1Id="c1.categoryId"
                      :data-categoryName="c1.categoryName"
                  >{{ c1.categoryName }}</a>
                </h3>
                <div :style="{display:currentIndex==index?'block':'none'}" class="item-list clearfix">
                  <div v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId" class="subitem">
                    <dl class="fore">
                      <dt>
                        <a
                            :data-category2Id="c2.categoryId"
                            :data-categoryName="c2.categoryName"
                        >{{ c2.categoryName }}</a>
                      </dt>
                      <dd>
                        <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                          <a
                              :data-category3Id="c3.categoryId"
                              :data-categoryName="c3.categoryName"
                          >{{ c3.categoryName }}</a>
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
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// 引入方式
import {throttle} from 'lodash'

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      show: true,
    }
  },
  //   组件挂载完毕，想服务器发送请求
  mounted() {
    // 获取数据
    //   判断路由组件是否是home
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      categoryList: state => state.home.categoryList,
    }),
  },
  methods: {
    // 鼠标经过赋值
    enterIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    // 鼠标离开初始化
    leaveIndex() {
      this.currentIndex = -1
      if (this.$route.path != '/home') {
        this.show = false
      }
    },
    goSearch(event) {
      // 获取点击的事件对象
      let node = event.target
      // 获取节点的自定义属性与属性值
      // console.log(node)
      let {
        categoryname,
        category1id,
        category2id,
        category3id,
      } = node.dataset
      // 有categoryame的就是a标签
      if (categoryname) {
        // 获取路由跳转的参数
        let locations = {name: 'search'};
        let query = {categoryName: categoryname}
        // console.log(query)
        // 各级分类的a标签
        if (category1id) {
          query.category1Id = category1id
          if (category2id) {
            query.category2Id = category2id
            if (category3id) {
              query.category3Id = category3id
            }

          }
        }
        if (this.$route.params) {
          // 搜素传递的是params，列表里传递的是query参数，都要传递过去
          locations.params = this.$route.params
          locations.query = query
          this.$router.push(locations)
          // console.log(locations)
        }
      }
    },
    enterShow() {
      if (this.$route.path != "/home") {
        this.show = true
      }
    },
  },
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
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
            line-height: 27px;
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
        }

        //鼠标经过加的类名
        .cur {
          background-color: skyblue;
        }
      }
    }

    .sort-enter {
      height: 0;

    }

    .sort-enter-to {
      height: 461px;

    }

    .sort-enter-active {
      transition: all .5s linear;
      overflow: hidden;
    }
  }
}
</style>
