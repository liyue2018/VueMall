import VueRouter from 'vue-router'

import Home from '../pages/home/home.vue'
import Login from '../pages/login/login.vue'
import Goods from '../pages/goods/goods.vue'
import Index from '../pages/index.vue'
import GoodsDetail from '../pages/goods/goodsDetail.vue'

var router = new VueRouter({
    routes: [
        { 
            path: '/', 
            component: Index, 
            redirect: '/home',
            children: [
                { path: 'home', component: Home },
                { path: 'goods', component: Goods },
                { path: 'goodsDetails/:id', component: GoodsDetail }
            ]
        },
        { path: '/login', component: Login}
    ]
})

export default router