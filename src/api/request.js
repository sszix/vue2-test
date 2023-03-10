import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
// 封装axios
const requests = axios.create({
    //基础路径，发请求时路径有api
    baseURL: "/api",
    // 请求超时的时间
    timeout: 5000,
})
// 请求拦截器
requests.interceptors.request.use((config) => {
    // 进度条开始
    nprogress.start();
    return config
})
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done()
    return res.data
}, (err) => {
    return Promise.reject(new Error('faile'))
})
export default requests
