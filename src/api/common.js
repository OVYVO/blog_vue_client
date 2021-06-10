import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/login',
    method: 'POST',
    data
  }, {
    shouldLoading: false
  })
}
export function register(data) {
  return request({
    url: '/api/register',
    method: 'POST',
    data
  })
}