// 使用具体参考axios文档: https://www.kancloud.cn/yunye/axios/234845
import { default as http } from 'axios'

/** 添加请求拦截器 */
http.interceptors.request.use((config) => {
  if (config.custom?.load) {
    throw new Error('错误!, 加载并未实现!')
  }
  return config
})

/** 添加响应拦截器 */
http.interceptors.response.use(
  (response) => {
    if (response.config.custom?.load) {
      throw new Error('错误!, 加载并未实现!')
    }
    return response
  },
  (error) => {
    if (error.config.custom?.load) {
      throw new Error('错误!, 加载并未实现!')
    }
    return Promise.reject(error)
  }
)

export default http
