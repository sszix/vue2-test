import Detail from '@/pages/Detail/index.vue'
import Home from '@/pages/Home/index.vue'
import Search from '@/pages/Search/index.vue'
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import AddCartSuccess from '@/pages/AddCartSuccess/index.vue'
import ShopCart from '@/pages/ShopCart/index.vue'

export default [
    {
        path: "/detail/:skuId",
        component: Detail,
        meta: {show: true},
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: {show: true},
    },
    {
        name: 'addcartsuccess',
        path: "/addcartsuccess",
        component: AddCartSuccess,
        meta: {show: true},
    },
    {
        path: "/home",
        component: Home,
        meta: {show: true},
    }, {
        name: 'search',
        path: "/search/:keyword?",
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
]
