export default [
{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    icon: 'el-icon-eleme',
    isShow: true
  }
},
{
  path: '/home',
  name: 'home',
  redirect: { name: 'dashboard' },
  component: () => import('@/views/home/index.vue'),
  meta: {
    icon: 'el-icon-eleme',
    isShow: true
  },
  children: [
  {
    path: '/home/dashboard',
    name: 'dashboard',
    component: () => import('@/views/home/dashboard.vue'),
    meta: {
      icon: 'el-icon-eleme',
      isShow: true
    },
  }]
}]