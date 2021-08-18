import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
// Pages
import Home from './views/Home.vue';
import TeamsFinder from './views/Teams_finder.vue'
import Expense_claim_form from './views/Expense_claim_form.vue'
import Spinner from './views/Spinner.vue';

import '../node_modules/nprogress/nprogress.css'

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teams-finder',
    name: 'TeamsFinder',
    component: TeamsFinder
  },
  {
    path: '/expense-claim',
    name: 'ExpenseClaimForm',
    component: Expense_claim_form
  },
  {
    path: '/spinner',
    name: 'Spinner',
    component: Spinner
  },
  {
    path: '**',
    name: 'Home',
    component: Home
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  NProgress.done()
})
export default router;
