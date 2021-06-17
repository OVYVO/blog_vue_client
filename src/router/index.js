import { createRouter, createWebHashHistory } from 'vue-router'
import CommonRouters from './common'
import ArticleRouters from './article'
import store from '@/store/index.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...CommonRouters,
    ...ArticleRouters
  ]
});

router.beforeEach((to, from, next) => {
  const { user_token } = store.state.user
  if (to.name !== 'login' && !user_token) {
    next({ name: 'login' })
  } else if (to.name !== 'login' && user_token) {
    next()
  } else if (to.name == 'login') {
    next()
  }
})

export default router