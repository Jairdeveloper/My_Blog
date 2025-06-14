import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogEditor from '../views/BlogEditor.vue'
import BlogDetail from '../views/BlogDetail.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/blogs', component: BlogView },
  { path: '/blogs/:id', component: BlogDetail },
  { path: '/editor/:id?', component: BlogEditor }
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
