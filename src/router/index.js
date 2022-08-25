import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Rocket  from '../views/RocketView.vue';
import ListView from '../views/ListView.vue';
import AosAnimation from '../views/AosAnimation.vue'; 

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/rocket',
    name: 'rocket',
    component: Rocket
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/aos',
    name: 'aos',
    component: AosAnimation
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
