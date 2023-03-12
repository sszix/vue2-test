import {reqCategoryList, reqGetBannerList, reqGetFloorList} from '@/api'
// home模块的仓库
const state = {
    // state中的数据默认初始值根据接口返回值
    // 三级列表数据
    categoryList: [],
    // 轮播图数据
    bannerList: [],
    floorList: [],
}
const mutations = {
    // 修改仓库数据
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerList) {
        // console.log('修改仓库数据')
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    },
}
const actions = {
    // 通过API里面的接口函数调用：向服务器发送请求，获取数据
    async categoryList({commit}) {
        // console.log("获取服务器数据")
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
    //     获取floor数据
    async getFloorList({commit}) {
        let result = await reqGetFloorList()
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
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
