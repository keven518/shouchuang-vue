import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/page/main/main'
import Index from '@/components/page/index/index'
import Find from '@/components/page/find/find'
import RoomList from '@/components/page/roomList/roomList'
import Service from '@/components/page/service/service'
import MyCenter from '@/components/page/myCenter/myCenter'
import Calendar from '@/components/vux/calendar'
import Register from '@/components/vux/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mainPage/index'
    },{
      path: '/mainPage',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'index',
          component: Index
        },{
          path: 'find',
          component: Find
        },{
          path: 'service',
          component: Service
        },{
          path: 'myCenter',
          component: MyCenter
        }
      ]
    },{
      path: '/find',
      name: 'find',
      component: Find
    },{
      path: '/roomList',
      name: 'roomList',
      component: RoomList
    },{
      path: '/service',
      name: 'service',
      component: Service
    },{
      path: '/myCenter',
      name: 'myCenter',
      component: MyCenter
    },{
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    },{
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
