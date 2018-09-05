import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	path:'/',
    	name:'layout',
    	component: resolve => require(['@/views/layout/layout.vue'], resolve),
    	redirect:'/index',
// 			meta: {
//           requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
//       },
			children:[
				{
					path:'index',
					name:'Index',
					component:resolve => require(['@/views/index/index.vue'], resolve),
				},
				{
					path:'ptp',
					name:'ptp',
					component:resolve => require(['@/views/ptp/ptp.vue'], resolve),
				},
				{
					path:'sp',
					name:'sp',
					component:resolve => require(['@/views/sp/sp.vue'], resolve),
				},
				{
					path:'jsqfp',
					name:'jsqfp',
					component:resolve => require(['@/views/jsqfp/jsqfp.vue'], resolve),
				},
				{
					path:'bc',
					name:'bc',
					component:resolve => require(['@/views/bc/bc.vue'], resolve),
				},
				{
					path:'newsList',
					name:'newsList',
					component:()=> import('@/views/newsList/newsList'),
					hidden: true
				},
				{
					path:'newsDetail',
					name:'newsDetail',
					component:()=> import('@/views/newsDetail/newsDetail'),
					hidden: true
				}
			]
    }

  ]
})
