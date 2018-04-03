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

  return Promise.resolve(error.response)
})

axios.defaults.baseURL = '/api'
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest'
}
axios.defaults.timeout = 10000

export default {
  // get请求
  get (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params: param
      }).then(res => {
        resolve(res)
      })
    })
  },
  // post请求
  post (url, param) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: param

      }).then(res => {
        resolve(res)
      })
    })
  }
}
