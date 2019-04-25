import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
    	{ path: '', redirect: '/open' },
    	{
    		path:'/open',
    		component:()=>import('../page/open.vue')
    	},
      {
        path:'/main',
        name:'main',
        component: ()=>import('../page/main.vue')
      },
      {
      	path:'/detail',
      	name:'detail',
      	component:()=>import('../page/detail.vue')
      },
      {
      	path:'/works',
      	name:'works',
      	component:()=>import('../page/works.vue')
      },
      {
      	path:'/about_me',
      	name:'about_me',
      	component:()=>import('../page/about_me.vue')
      },
      {
      	path:'/contact',
      	name:'contact',
      	component:()=>import('../page/contact.vue')
      },
			{
				path:'/upload',
				name:'upload',
				component:()=>import('../page/upload.vue')
			},
			{
				path:'/upload2',
				name:'upload2',
				component:()=>import('../page/upload2.vue')
			},
			{
				path:'/mine',
				name:'mine',
				component:()=>import('../page/mine.vue')
			}
    ]
  })
}
