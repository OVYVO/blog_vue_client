export default [
{
  path: '/',
  name: 'login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    inLayout: false,
    title: '登录页'
  }
},
{
  path: '/home',
  name: 'home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    icon: 'el-icon-s-home',
    inLayout: true,
    title: '首页'
  },
},
{
  path: '/test',
  name: 'test',
  component: () => import('@/views/test/index.vue'),
  meta: {
    icon: 'el-icon-s-home',
    inLayout: true,
    title: '测试'
  }
}]