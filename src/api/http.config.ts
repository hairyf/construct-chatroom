/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-21 11:16:39
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
// 使用具体参考axios文档: https://www.kancloud.cn/yunye/axios/234845
import { default as http } from 'axios'
import { ERROR_STRATEGY, STRATEGY_KEYS } from './error.strategy'
import { Toast } from 'vant'
http.defaults.baseURL = '/api'

/** 添加请求拦截器 */
http.interceptors.request.use((config) => {
  if (config.custom?.loading) {
    Toast.loading({ duration: 0, forbidClick: true, message: '数据请求中...' })
  }
  return config
})

/** 添加响应拦截器 */
http.interceptors.response.use(
  (response) => {
    response.config.custom?.loading && Toast.clear()
    return response
  },
  (error) => {
    error.config.custom?.loading && Toast.clear()
    ERROR_STRATEGY[error.response.status as STRATEGY_KEYS]?.(error)
    return Promise.reject(error)
  }
)

export { http }
