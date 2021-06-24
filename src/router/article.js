export default [
{
  path: '/article',
  name: 'article',
  component: () => import('@/views/article/index.vue'),
  redirect: { name: 'articleList' },
  meta: {
    icon: 'el-icon-s-management',
    isShow: true,
    title: '文章管理'
  },
  children: [{
    path: '/article/list',
    name: 'articleList',
    component: () => import('@/views/article/list.vue'),
    meta: {
      isShow: true,
      title: '文章列表'
    }
  }]
}]