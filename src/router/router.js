import { createRouter, createWebHistory } from 'vue-router';

import About from '@/view/About.vue';
import ViaCep from '@/view/ViaCep.vue';
import Index from '@/view/Index.vue';
import NotFound from '@/view/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/via-cep',
    name: 'ViaCep',
    component: ViaCep,
  },
  // Rota para lidar com erro 404 (página não encontrada)
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
