import request from '@/utils/request'
import qs from 'qs'

export function login (data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    dataType: 'json',
    data: qs.stringify(data)
  })
}

export function getInfo (token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/api/user/logout',
    method: 'post'
  })
}
