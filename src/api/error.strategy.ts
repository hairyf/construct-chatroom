/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-11-30 13:40:09
 * @LastEditTime: 2020-12-19 14:25:53
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { Toast } from 'vant'

const loggerError = (errMsg: string, callback?: () => void) => {
  Toast.fail({
    message: errMsg,
    onClose: callback
  })
}

export const ERROR_STRATEGY = {
  /** 该请求参数不正确 */
  400: (err: any) => loggerError(err.data?.msg ?? '请求错误'),
  /** 该请求需要用户登录 */
  401: (err: any) => {},
  /** 该请求未得到授权 */
  403: (err: any) => loggerError('未得到授权!'),
  /** 该请求地址不存在 */
  404: (err: any) => loggerError('请求地址不存在!'),
  /** 服务器内部异常 */
  503: (err: any) => loggerError('服务器未开启服务, 请联系技术人员!'),
  /** 服务器内部异常 */
  500: (err: any) => loggerError('服务器内部异常, 请联系技术人员!'),
  /** 服务器请求超时 */
  1000: (err: any) => loggerError('服务器请求超时!')
}

export type STRATEGY_KEYS = keyof typeof ERROR_STRATEGY
