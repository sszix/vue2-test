import {reqCategoryList} from '@/api'
// home模块的仓库
const state = {
    // state中的数据默认初始值根据接口返回值
    CategoryList: [],
}
const mutation = {}
const actions = {
    async categoryList() {
        let result = await reqCategoryList()
        if (result.code == 200) {

        }
    },
}
const getters = {}
export default {
    state,
    mutation,
    actions,
    getters,
}
