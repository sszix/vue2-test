<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul v-for="(cart,index) in cartInfoList" :key="cart.id" class="cart-list">
          <li class="cart-list-con1">
            <input :checked="cart.isChecked==1" name="chk_list"
                   type="checkbox"
                   @change="updateChecked(cart,$event)"
            >
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl">
            <div class="item-msg">{{ cart.skuName }}
            </div>
          </li>
          <!--<li class="cart-list-con3">-->
          <!--  <div class="item-txt">语音升级款</div>-->
          <!--</li>-->
          <li class="cart-list-con4">
            <span class="price">{{ cart.cartPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins"
               href="javascript:void(0)"
               @click="handler('minus',-1,cart)"
            >-</a>
            <input :value="cart.skuNum" autocomplete="off"
                   class="itxt" minnum="1" type="text"
                   @change="handler('change',$event.target.value*1,cart)"
            >
            <a class="plus"
               href="javascript:void(0)"
               @click="handler('add',1,cart)"
            >+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.cartPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" href="#none" @click="deleteCartById(cart)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>

      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input :checked="isAllCheck" class="chooseAll" type="checkbox">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn" href="###" target="_blank">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {throttle} from 'lodash/function'

export default {
  name: 'ShopCart',
  mounted() {
    this.getData()
  },
  computed: {
    ...mapGetters(['cartList']),
    // 购物车数据
    cartInfoList() {
      return this.cartList.cartInfoList || []
    },
    //   计算购买总价
    totalPrice() {
      let sum = 0
      this.cartInfoList.forEach(item => {
        sum += item.skuNum * item.skuPrice
      })
      return sum
    },
    //   全选
    isAllCheck() {
      // 所有元素满足条件为真，其余为false
      return this.cartInfoList.every(cart => cart.isChecked == 1)
    },
  },
  methods: {
    // 获取个人id
    getData() {
      this.$store.dispatch('getCartList')
    },
    // 修改产品个数
    handler: throttle(async function (type, disNum, cart) {
      // type区分这三个元素
      // disNum是变化的量或最终值
      // cart是产品
      switch (type) {
        case "add":
          disNum = 1;
          break;
        case "minus":
          disNum = cart.skuNum > 1 ? -1 : 0;
          break;
        case "change":
          if (isNaN(disNum) || disNum < 1) {
            disNum = 0
          } else {
            disNum = parseInt(disNum) - cart.skuNum
          }
          break;
      }
      // 提交给actions
      try {
        await this.$store.dispatch('addOrUpdateShopCart', {
          skuId: cart.skuId,
          skuNum: disNum,
        })
        this.getData()
      } catch (error) {
        alert(error.message)
      }
    }, 500),
    // 删除一个商品
    async deleteCartByIde(cart) {
      try {
        await this.$store.dispatch('deleteCartById', cart.skuId)
        this.getData()
      } catch (error) {
        alert(error.message)
      }
    },
    //   修改商品状态
    async updateChecked(cart, event) {
      try {
        //       因为isChecked是布尔值，需要传的是应该是1或0，所以要转换一下
        // console.log(event.target.checked)
        let isChecked = event.target.checked ? "1" : "0"
        await this.$store.dispatch('updateCheckedById', {skuID: cart.skuId, isChecked})
        this.getData()
      } catch (error) {
        alert(error.message)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }


        .cart-list-con4 {
          width: 10%;

        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
