import Vue from 'vue'
import App from './App.vue'
// 三级联动,全局组件
import TypeNav from '@/components/TypeNav/index.vue'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
//测试
import {reqCategoryList} from '@/api'
// 第一个参数是全局组件的名字,第二个参数
Vue.component(TypeNav.name, TypeNav)
Vue.config.productionTip = false
// 测试
reqCategoryList()
new Vue({
    render: h => h(App),
    // 注册路由
    router,
    // 注册仓库
    store,
}).$mount('#app')
