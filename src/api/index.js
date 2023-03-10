// 对API进行统一管理
import requests from '@/api/request'
// 三级联动接口
// api/product/getBaseCategoryList
// axios发送请求返回Promise对象
export const reqCategoryList = () => requests({method: 'get', url: '/product/getBaseCategoryList'})
