/*
* @Author: yongze-chen
* @Date:   2018-06-20 10:56:57
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-25 17:06:33
*/

import Vue from 'vue'

import VueRouter from 'vue-router'

// 使用vue-router

Vue.use(VueRouter)

// 使用 vue-resource 完成本地json格式的数据请求

import VueResource from 'vue-resource'

Vue.use(VueResource)

// 使用vue-lazyload 实现图片懒加载

import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad)

import router from './router/router.js'

import $ from 'jquery'

import app from './App.vue'

import '../node_modules/swiper/dist/css/swiper.css'



var vm = new Vue({
    el: '#app',

    render: function(createElement) {
        return createElement(app)
    },
    router
})