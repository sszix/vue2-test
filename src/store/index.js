import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from '@/store/home'
import search from '@/store/search'
import detail from '@/store/detail/detail'
import shopcart from '@/store/shopcar/shopcart'
// 使用插件
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
    },
})
