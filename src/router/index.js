import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index/index'
import Calendar from '@/components/vux/calendar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/calendar',
      name: 'calendar',
      component: Calendar
    }
  ]
})
