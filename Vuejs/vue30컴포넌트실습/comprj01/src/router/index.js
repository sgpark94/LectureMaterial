import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Vue3103View from '../views/Vue3103View.vue';
import Vue3104View from '../views/Vue3104View.vue';
import Vue31exView from '../views/Vue31exView.vue';
import Vue3403View from '../views/Vue3403View.vue';
import Vue34exView from '../views/Vue34exView.vue';
import Vue3501View from '../views/Vue3501View.vue';
import Vue3701View from '../views/Vue3701View.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue3103',
    name: 'vue3103',
    component: Vue3103View,
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue3104',
    name: 'vue3104',
    component: Vue3104View,
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue31ex',
    name: 'vue31ex',
    component: Vue31exView,
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue3403',
    name: 'vue3403',
    component: Vue3403View,
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue34ex',
    name: 'vue34ex',
    component: Vue34exView,
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue3501',
    name: 'vue3501',
    component: Vue3501View,
  },
  {
    /* url 과 컴포넌트 연결 */
    path: '/vue3701',
    name: 'vue3701',
    component: Vue3701View,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
