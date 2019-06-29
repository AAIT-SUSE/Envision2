import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/*
  Import views
 */
const main = () => import('../views/Home.vue');
const groups = () => import('../views/Groups.vue');
const articles = () => import('../views/Articles.vue');
const questions = () => import('../views/Questions.vue');
const giftShop = () => import('../views/GiftShop.vue');
const hof = () => import('../views/HallOfFame.vue');
const create = () => import('../views/Create.vue');

/*
  Config Paths
 */
export default new Router({
  routes: [
    {
      path: '/main',
      component: main,
      name: 'main'
    },
    {
      path: '/groups',
      component: groups,
      name: 'groups'
    },
    {
      path: '/articles',
      component: articles,
      name: 'articles'
    },
    {
      path: '/questions',
      component: questions,
      name: 'questions'
    },
    {
      path: '/gift-shop',
      component: giftShop,
      name: 'gift-shop'
    },
    {
      path: '/hof',
      component: hof,
      name: 'hof'
    },
    {
      path: '/create',
      component: create,
      name: 'create'
    }
  ]
})
