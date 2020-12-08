/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 16:08:22
 * @LastEditTime: 2020-12-08 12:54:56
 * @Description: 处理错误信息
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Koa from 'koa'
import { logger } from './logger'
type Ctx = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext>
type Next = Koa.Next
export default () => async (ctx: Ctx, next: Next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      status: ctx.status,
      message: err.message || 'server Error'
    }
    logger.error(err)
  }
}
