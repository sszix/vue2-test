<template>
  <div>
    <Header />
    <!--路由组件出口-->
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import Header from '@/components/Header/index.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
</style>
