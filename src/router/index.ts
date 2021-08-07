//现在创建router的方式与vue2.x的版本已经很不同了
import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/user',
    component: () => import('@/views/user/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(), //替代之前的mode，是必须的
  routes
});
export default router;