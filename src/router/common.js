export default [
{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    icon: 'el-icon-eleme',
    isShow: false,
    title: '登录页'
  }
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    icon: 'el-icon-eleme',
    isShow: true,
    title: '首页'
  },
}]