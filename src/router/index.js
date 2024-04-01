import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/create',
      name: 'create project',
      component: () => import('../views/CreateProjectView.vue')
    },
    {
      path: '/project',
      name: 'show project',
      component: () => import('../views/ProjectView.vue')
    }
  ]
})

export default router
