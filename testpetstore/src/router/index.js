import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Form from '@/components/Form'

import Product from '@/components/Product'
import EditProduct from '@/components/EditProduct'

Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    // {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld   
    // }
    {
      path:'/',
      name:'iMain',   // <router-link>의 to 속성관련
      component: Main,
      props: true,  // this.$route.params
    },
    {
      path:'/form',
      name:'Form',
      component: Form,
      props: true,
    },
    {
      path:'/product/:id',  // place holder 설정, 동적 세그먼트
      name:'Id',
      component:Product,
      props:true,
      children: [
        {
          path:'edit',     //   /product/:id/edit
          name:'Edit',
          component: EditProduct,
          props:true
        }
      ],
    },
    {
      path:'*',     // 경로배열에 정의되지 않은 모든 경로를 처리함
      redirect:'/'  // 경로를 다른 경로로 보냄
    }
  ]
})
