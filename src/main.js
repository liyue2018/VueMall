/*
* @Author: yongze-chen
* @Date:   2018-06-20 10:56:57
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-23 12:19:44
*/

import Vue from 'vue'

import VueRouter from 'vue-router'
// 使用vue-router

Vue.use(VueRouter)

// import router from './router.js'

import app from './App.vue'



var vm = new Vue({
    el: '#app',

    render: function(createElement) {
        return createElement(app)
    }
    // router
})