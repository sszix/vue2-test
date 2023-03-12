// search模块的仓库
import {reqGetSearchInfo} from '@/api'

const state = {
    searchList: {},
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    },
}
const actions = {
    // params={} 默认参数
    async getSearchList({commit}, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('GETSEARCHLIST', result.data)
        }
    },
}
//  计算属性。简化代码
const getters = {
    // 这里获取的形参是当前仓库
    goodsList(state) {
        // 如果没有网络，这里的数据是未定义，会导致页面遍历不了
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
}
export default {
    state,
    mutations,
    actions,
    getters,
}
