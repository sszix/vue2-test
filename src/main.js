import Vue from 'vue'
import App from './App.vue'
// 三级联动,全局组件
import TypeNav from '@/components/TypeNav/index.vue'
import Carousel from '@/components/Carousel/index.vue'
import Pagination from '@/components/Pagination/index.vue'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'

// 第一个参数是全局组件的名字,第二个参数
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 创建全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    // 注册路由
    router,
    // 注册仓库
    store,
}).$mount('#app')
