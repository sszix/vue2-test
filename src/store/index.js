import Vue from 'vue'
import Vuex from 'vuex'
// 引入小仓库
import home from '@/store/home'
import search from '@/store/search'
// 使用插件
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        home,
        search,
    },
})
