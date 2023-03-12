<template>
  <div id="floor1Swiper" ref="cur" class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(carousel,index) in list" :key="carousel.id"
           class="swiper-slide">
        <img :src="carousel.imgUrl">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from 'swiper'

export default {
  name: "Carousel",
  props: ['list'],
  watch: {
    list: {
      // 这里的数据是父组件给的，没有发生变化，所以监听不到，要初始化一下
      immediate: true,
      handler() {
        // 数据有了，还需要渲染，用nextTick确保渲染完毕
        this.$nextTick(() => {
          // 数据和结构有了样式就可以生效
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,// 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          })
        })
      },
    },
  },
}
</script>

<style scoped>

</style>
