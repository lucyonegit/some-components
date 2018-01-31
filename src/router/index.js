import Vue from 'vue'
import Router from 'vue-router'

import goodsbyke from '@/components/goodsbyke'
import index from '@/components/main_index'
import pcenter from '@/components/pcenter'
import charge from '@/components/charge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',             
      name: 'defult_index',        //默认请求
      component: index,
    },
    {
      path: '/index',
      name: 'goindex',            //主页请求
      component: index,
    },
    {
      path: '/goodsbyke',     //购物车请求
      name: 'go_goodsbyke',
      component: goodsbyke,
    },
    {
      path: '/pcenter',
      name: 'pcenter',                //个人中心请求
      component: pcenter,
    },
    {
      path: '/charge',
      name: 'charge',                //产品分类请求
      component: charge,
    }
  ]
})
