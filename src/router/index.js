import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Login',
    meta:{name:'登录'},
    component:()=> import ("@/views/Login.vue")
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=> import ("@/views/Home.vue"),
    redirect:{name:'Index'},
    children:[
      {
        path:'index',
        name:'Index',
        meta:{name:'主页'},
        component:()=> import ("@/views/index.vue")
      },
      {
        path:'studentApply',
        name:'studentApply',
        meta:{name:'考勤管理'},
        component:()=> import ("@/views/studentApply.vue")
      },
      {
        path:'classManage',
        name:'classManage',
        meta:{name:'班级管理'},
        component:()=> import ("@/views/classManage.vue")
      },
      {
        path:'setting',
        name:'setting',
        meta:{name:'设置'},
        component:()=> import ("@/views/setting.vue")
      },
      {
        path:'userManage',
        name:'userManage',
        meta:{name:'用户管理'},
        component:()=> import ("@/views/userManage.vue")
      },
      {
        path:'fileManage',
        name:'fileManage',
        meta:{name:'文件管理'},
        component:()=> import ("@/views/fileManage.vue")
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.name){
    window.document.title=to.meta.name
  }
  next()
})

export default router
