// 引入mockjs
import Mock from 'mockjs'
//webpack默认暴露的：图片。JSON数据格式
// 注意需要引入
import floor from './floor.json'
import banner from './banner.json'

Mock.mock("/mock/banner", {code: 200, data: banner})
Mock.mock("/mock/floor", {code: 200, data: floor})
