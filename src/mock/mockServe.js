// 引入mockjs
import Mock from 'mockjs'
//webpack默认暴露的：图片。JSON数据格式
import floor from './floor.json'

Mock.mock("/mock/banner", {code: 200, data: floor})
Mock.mock("/mock/floor", {code: 200, data: floor})
