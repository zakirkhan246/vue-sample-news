import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TopHeadlines from '../views/TopHeadlines.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/top-headlines',
    name: 'Top Headlines',
    component: TopHeadlines,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
