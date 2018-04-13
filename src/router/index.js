import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
import AddCommodity from '../components/AddCommodity.vue'
import CommodityList from '../components/CommodityList.vue'
import EditPwd from '../components/EditPwd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
    	path:'/index',
    	name:'index',
    	component:Index,
        children:[
            // {
            //     path: '',
            //     name: 'addCommodity',
            //     component: AddCommodity
            // },
            {
                path: '/index/addCommodity',
                name: 'addCommodity',
                component: AddCommodity
            },
            {
                path: '/index/commodityList',
                name: 'commodityList',
                component: CommodityList
            },
            {
                path: '/index/editPwd',
                name: 'editPwd',
                component: EditPwd
            },
      ]
    }
  ]
})
