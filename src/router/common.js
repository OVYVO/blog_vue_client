export default [
{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue')
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue')
}]