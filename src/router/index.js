import { createRouter, createWebHashHistory } from 'vue-router'
import CommonRouters from './common'
import store from '@/store/index.js';

//require.context
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...CommonRouters]
});

router.beforeEach((to, from, next) => {
  const { user_token } = store.state.user
  if (to.name !== 'login' && !user_token) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router