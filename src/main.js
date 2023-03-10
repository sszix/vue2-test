// 引入路由
// 全局组件
import TypeNav from '@/pages/Home/TypeNav/index.vue'
import router from '@/router'
import Vue from 'vue'
import App from './App.vue'
// 三级联动
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
