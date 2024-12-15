import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://localhost:8080/vue-element-admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function captcha() {
  return request({
    url: 'http://localhost:8080/vue-element-admin/user/captcha',
    method: 'get',
    responseType: 'blob'
  })
}
