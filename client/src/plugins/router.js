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
const uCenter = () => import('../views/UCenter.vue');

/*
  Import Subviews
 */
const createArticle = () => import('../components/CreateArticle.vue');
const createQuestion = () => import('../components/CreateQuestion.vue');

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
      path: '/u-center',
      component: uCenter,
      name: 'u-center'
    },
    {
      path: '/create',
      name: 'create',
      component: create,
      children: [
        {
          path: 'article',
          name: 'create-article',
          component: createArticle
        },
        {
          path: 'question',
          name: 'create-question',
          component: createQuestion
        },
      ]
    },
  ]
})
