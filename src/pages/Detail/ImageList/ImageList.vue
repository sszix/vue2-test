<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(slide,index) in skuImageList" :key="slide.id" class="swiper-slide">
        <img :class="{active:currentIndex==index}" :src="slide.imgUrl"
             @click="changeCurrentIndex(index)"
        >
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: "ImageList",
  // 接收参数
  props: ['skuImageList'],
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index
      this.$bus.$emit("getIndex", index)
    },
  },
  watch: {
    skuImageList() {
      this.$nextTick(() => {
        var mySwiper = new Swiper('.swiper-container', {
          // 轮播显示几个
          slidesPerView: 3,
          // 每次切换的数量
          slidesPerGroup: 1,
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      })
    },
  },
}
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;

    &::after {
      font-size: 12px;
    }
  }
}
</style>
