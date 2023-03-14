import {reqDeleteCartById, reqGetCartList, reqUpdateCheckedById} from '@/api'

const state = {
    cartList: [],
}
const actions = {
    //     获取购物城列表的数据
    async getCartList({commit}) {
        let result = await reqGetCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    //     删除购物车中的商品
    async deleteCartById({commit}, skuId) {
        let result = await reqDeleteCartById(skuId)
        // 只需要返回成功与否
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('Delete failed'))
        }
    },
    //     修改购物车产品状态
    async updateCheckedById({commit}, {skuID, isChecked}) {
        let result = await reqUpdateCheckedById(skuID, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('Failed to modify cart item status'))
        }
    },
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    },
}
const getters = {
    cartList(state) {
        return state.cartList[0] || []
    },

}
export default {
    state,
    mutations,
    actions,
    getters,
}
