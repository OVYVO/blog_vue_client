import request from '@/utils/request'

export function articleAdd(data) {
  return request({
    url: '/api/article-add',
    method: 'POST',
    data
  }, {
    shouldLoading: false
  })
}