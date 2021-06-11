export default [
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue')
},
{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    inPageLayout: true
  }
}]