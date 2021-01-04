import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Films from '@/views/Films/Index'
// import NowPlaying from '@/views/Films/NowPlaying'
// import ComingSoon from '@/views/Films/ComingSoon'
// import Detail from '@/views/Films/Detail'
// import Cinemas from '@/views/Cinemas/Index'
// import Center from '@/views/Center/Index'

import filmRouter from './routers/film'
import cinemaRouter from './routers/cinema'
import centerRouter from './routers/center'


const routes = [

  
  {path: '/', redirect: '/films/nowPlaying'},

  ...filmRouter,
  cinemaRouter,
  centerRouter



  // 电影模块
        // 电影模块父
        // 正在热映
        // 即将上映
  // { 
  //   path:'/films',
  //   component: Films,
  //   children:[
  //     { path: 'nowPlaying', component: NowPlaying},
  //     { path: 'comingSoon', component: ComingSoon}
  //   ]
  // },
  // // 电影详情
  // {
  //   path:'/films',
  //   component: Detail,
  // },
  // 影院模块
  // {
  //   path: '/cinemas',
  //   component: Cinemas,
  // },
  // 个人中心
    // {
    //   path: "/center",
    //   component: Center,
    // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
