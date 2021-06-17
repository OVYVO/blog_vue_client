export default [
{
  path: '/article',
  name: 'article',
  component: () => import('@/views/home/index.vue'),
  meta: {
    icon: 'el-icon-eleme',
    isShow: true,
    title: '文章管理'
  },
  children: [{
    path: '/article/list',
    name: '/article/list',
    component: () => import('@/views/home/index.vue'),
    meta: {
      icon: 'el-icon-eleme',
      isShow: true,
      title: '文章列表'
    }
  }]
}]