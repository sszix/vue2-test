// 配置路由的地方
//引入路由组件
import Home from '@/pages/Home/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Search from '@/pages/Search/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter)
//导出
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {show: true},
        }, {
            path: "/search/:keyword",
            component: Search,
            meta: {show: true},

        }, {
            path: "/login",
            component: Login,
            meta: {show: false},

        }, {
            path: "/register",
            component: Register,
            meta: {show: false},

        },
        // 项目运行的时候重定向到首页
        {
            path: '*',
            redirect: "/home",
        },

    ],
})
