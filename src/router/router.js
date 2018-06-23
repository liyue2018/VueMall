/*
* @Author: liyue2018
* @Date:   2018-06-22 15:48:57
* @Last Modified by:   liyue2018
* @Last Modified time: 2018-06-22 15:49:14
*/
import VueRouter from 'vue-router'

import home from './common/home.vue'

import footer from './common/footer.vue'



var router = new VueRouter({
    routes: [
        { path: '/home', component: home },
        { path: '/footer', component: footer }
    ]
})

export default router