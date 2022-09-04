import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { start, close } from '@/plugins/nprogress.ts'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/Screen.vue'),
    redirect: '/portal',
    children: [
      {
        path: '/portal',
        component: () => import('@/views/portal/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to: any, from: any, next: () => void) => {
  start()
  next()
})

router.afterEach(() => {
  close()
})

export default router
