import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import NewsDetail from '../views/NewsDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path:'/news/:id',
    name:'NewsDetail',
    component:NewsDetail,
    props:true
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
