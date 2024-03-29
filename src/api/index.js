// 对API进行统一管理
import requests from '@/api/request'
import mockRequests from '@/api/mockRequests'
// 三级联动接口
// api/product/getBaseCategoryList
// axios发送请求返回Promise对象
export const reqCategoryList = () => {
    //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
    //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
    //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
    return requests({method: 'get', url: '/product/getBaseCategoryList'});
}
// 获取轮播图接口
export const reqGetBannerList = () => mockRequests.get("/banner")
//获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor')
//获取搜索模块内容 /api/list 方式post 需要带参数
// 当前这个接口必须有参数
export const reqGetSearchInfo = (params) => requests({url: '/list', method: "post", data: params})
//获取商品详情 /api/item/{ skuId }
export const reqGoodsInfo = (skuId) => requests({url: `/item/${skuId}`, method: "get"})
//添加到购物车 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
})
// 获取购物车列表 /api/cart/cartList
export const reqGetCartList = () => requests({url: '/cart/cartList', method: 'get'})
//购物城车删除商品  /api/cart/deleteCart/{skuId}
export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
})
// 修改产品选中状态 /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById = (skuID, isChecked) => requests({
    url: `/cart/checkCart/${skuID}/${isChecked}`, method: 'get',
})
