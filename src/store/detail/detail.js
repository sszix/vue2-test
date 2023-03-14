import {reqAddOrUpdateShopCart, reqGoodsInfo} from '@/api'
// 生成游客的随机id
import {getUUID} from '@/utils/uuid_token'

const state = {
    goodsInfo: {},
    // 游客临时身份
    uuid_token: getUUID(),
}
const actions = {
    // 获取产品信息
    async GetGoodInfo({commit}, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    // 获取添加购物车信息
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        // 因为服务器只返回了成功，没有返回其他数据，所以不用存到仓库
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('Request failed'))
        }
    },
}
const mutations = {
    // 处理商品详情存储数据
    GETGOODINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    },
}
const getters = {
    // 简化路径导航的数据
    categoryView(state) {
        // 如果没有网络，这里的数据是未定义，会导致页面遍历不了
        // 初始数据为空，所以要判断
        return state.goodsInfo.categoryView || {}
    },
    //简化产品信息
    skuInfo(state) {
        // 如果没有网络，这里的数据是未定义，会导致页面遍历不了
        return state.goodsInfo.skuInfo || {}
    },
    // 简化售卖属性
    spuSaleAttrList(state) {
        // 如果没有网络，这里的数据是未定义，会导致页面遍历不了
        return state.goodsInfo.spuSaleAttrList || []
    },
}
export default {state, actions, mutations, getters}
