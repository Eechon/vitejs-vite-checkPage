import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../view/index.vue') },
  { path: '/carlight', component: () => import('../view/carLightCheck/index.vue') },
  {
    path: '/helloworld',
    component: () => import('../components/HelloWorld.vue'),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
