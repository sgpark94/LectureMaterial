import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import View3103View from '../views/View3103View.vue';
import View3104View from '../views/View3104View.vue';
import View31exView from '../views/View31exView.vue';
import View3403View from '../views/View3403View.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/vue3103',
    name: 'vue3103',
    component: View3103View
  },
  {
    path: '/vue3104',
    name: 'vue3104',
    component: View3104View
  },
  {
    path: '/vue31ex',
    name: 'vue31ex',
    component: View31exView
  },
  {
    path: '/vue3403',
    name: 'vue3403',
    component: View3403View
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
