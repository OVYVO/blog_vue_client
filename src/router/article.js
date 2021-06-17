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
    },
    children: [{
      path: '/article/list/1',
      name: '/article/list/1',
      component: () => import('@/views/home/index.vue'),
      meta: {
        icon: 'el-icon-eleme',
        isShow: true,
        title: '文章列表1'
      },
    },
    {
      path: '/article/list/2',
      name: '/article/list/2',
      component: () => import('@/views/home/index.vue'),
      meta: {
        icon: 'el-icon-eleme',
        isShow: true,
        title: '文章列表2'
      },
    }]
  }, {
    path: '/article/test',
    name: '/article/test',
    component: () => import('@/views/home/index.vue'),
    meta: {
      icon: 'el-icon-eleme',
      isShow: true,
      title: '牛逼刚哥'
    },
  }]
}]