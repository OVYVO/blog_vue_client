export default [
{
  path: '/article',
  name: 'article',
  component: () => import('@/views/article/index.vue'),
  redirect: { name: 'articleList' },
  meta: {
    icon: 'el-icon-s-management',
    inLayout: true,
    title: '文章管理'
  },
  children: [{
    path: '/article/list',
    name: 'articleList',
    component: () => import('@/views/article/list.vue'),
    meta: {
      inLayout: true,
      title: '文章列表'
    }
  },
  {
    path: '/article/editor',
    name: 'articleEditor',
    component: () => import('@/views/article/editor.vue'),
    meta: {
      inLayout: true,
      title: '文章编辑'
    }
  }]
}]