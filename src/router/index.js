//引入路由组件
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import routes from '@/router/routes'
//使用插件
Vue.use(VueRouter)
// 保存push和replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

// 重写push和replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, resolve, reject)
    } else {
        originPush.call(this, location, () => {
        }, () => {
        })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, resolve, reject)
    } else {
        originReplace.call(this, () => {
        }, () => {
        })
    }
}
//导出
export default new VueRouter({
    // 配置路由
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y: 0}
    },
})
