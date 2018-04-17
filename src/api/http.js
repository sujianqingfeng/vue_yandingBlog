// 引入axios
import axios from 'axios'
import {getCookie} from '../utils/cookie'

axios.interceptors.request.use(config => {
  let token = getCookie('token')
  if (token) config.headers.Authorization = `JWT ${token}`
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    console.error('发生错误　这里可以进行一些异常处理')
  }

  return Promise.reject(error.response)
})

axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

const request = (method, url, param) => (new Promise((resolve, reject) => {
  axios({
    method: method,
    url,
    params: method === 'get' ? param : '',
    data: method !== 'get' ? param : ''
  }).then(res => {
    resolve(res)
  }).catch(error => reject(error))
}))

export default {
  get (url, param) {
    return request('get', url, param)
  },
  post (url, param) {
    return request('post', url, param)
  },
  detlete (url, param) {
    return request('detlete', url, param)
  },
  patch (url, param) {
    return request('patch', url, param)
  },
  put (url, param) {
    return request('put', url, param)
  }
}
