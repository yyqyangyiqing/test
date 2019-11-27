import Vue from 'vue';
import VueRouter from "vue-router"

import Home from '../pages/home';
import News from '../pages/news';
import NewsDetail from '../pages/newsdetail';
import Login from '../pages/login';
import Reg from '../pages/reg';
import User from '../pages/user';
import Market from '../pages/market';
import Goods from '../pages/goods';
import Car from '../pages/car'
Vue.use(VueRouter)

let routes=[
    {path:'/home',component:Home},
    {path:'/news',component:News},
    {path:'/newsdetail/:id',component:NewsDetail},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/user',component:User},
    {path:'/market',component:Market},
    {path:'/goods/:id',component:Goods},
    {path:'/car',component:Car},
    {path:'/',redirect:'/home'}
]

export default new VueRouter ({
    mode:'history',
    routes
})