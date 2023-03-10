import {reqCategoryList, reqGetBannerList} from '@/api'
// home模块的仓库
const state = {
    // state中的数据默认初始值根据接口返回值
    // 三级列表数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
}
const actions = {
    // 通过API里面的接口函数调用：向服务器发送请求，获取数据
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    //     获取首页轮播图数据
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}
