import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/HelloWorld.vue')
    },
    {
        path:'/event',
        name:'Event',
        component:()=>import('../pages/FanEvent.vue')
    },{
        path:'/fanart',
        name:'FanArt',
        component:()=>import('../pages/FanArt.vue')
    },{
        path:'/home',
        redirect:'/'
    }
]

const router = createRouter({
    history: createWebHistory(), // 路由模式：history模式
    routes: routes
})

export default router;