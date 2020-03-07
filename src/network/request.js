// 网络请求
import axios from 'axios'

export function request(config) {
  let instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000'
    // baseURL: 'http://106.54.54.237:8000/api/hy'
    baseURL: 'http://106.54.54.237:8000/api/wh'
  })
  instance.interceptors.request.use(config => {
    return config
  })
  instance.interceptors.response.use(response => {
    return response
  })
  return instance(config)
}
