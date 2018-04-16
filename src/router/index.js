import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import AddCommodity from '../components/AddCommodity.vue'
import CommodityList from '../components/CommodityList.vue'
import EditPwd from '../components/EditPwd.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'Login',
        component: Login
    },
    {
        path:'/index',
        navShow:true,
        component:Index,
        navName:'商品管理',
        children:[
            {
                path:'/addCommodity',
                navShow:true,
                name:'addCommodity',
                navName:'添加商品',
                component:AddCommodity
            },
            {
                path:'/commodityList',
                navShow:true,
                navName:'商品列表',
                component:CommodityList
            },
        ]
    },
    {
        path:'/index',
        navShow:true,
        component:Index,
        navName:'系统设置',
        children:[
            {
                path:'/editPwd',
                navShow:true,
                navName:'修改密码',
                component:EditPwd
            },
        ]
    },
    {
        path:'/index',
        navShow:true,
        oneLevel:true,
        component:Index,
        navName:'1级目录',
        children:[
            {
                path:'/oneLevel',
                navShow:true,
                navName:'一级目录',
                component:CommodityList
            },
        ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  console.log(to)
  next()
  // if (to.path == '/login') {
  //   sessionStorage.removeItem('user');
  // }
  // let user = JSON.parse(sessionStorage.getItem('user'));
  // if (!user && to.path != '/login') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})

export default router