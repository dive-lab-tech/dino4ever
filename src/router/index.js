import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactsView.vue') // Reemplaza 'ContactView.vue' con tu nombre de archivo real
    },
    // si no existe la ruta
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;
