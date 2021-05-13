/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 16:37:22
 * @LastEditTime: 2020-12-28 20:11:04
 * @Description: 错误处理
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import path from 'path'
import log4js from 'koa-log4'

log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      // 生成文件的规则
      pattern: '-yyyy-MM-dd.log',
      // 文件名始终以日期区分
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      // 生成文件路径和文件名
      filename: path.join(__dirname, '../logs', 'access')
    },
    application: {
      type: 'dateFile',
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      filename: path.join(__dirname, '../logs', 'application')
    },
    out: {
      type: 'console'
    }
  },
  categories: {
    default: { appenders: ['out'], level: 'info' },
    access: { appenders: ['access'], level: 'info' },
    application: { appenders: ['application'], level: 'WARN' }
  }
})

// 记录所有访问级别的日志
export const accessLogger = log4js.koaLogger(log4js.getLogger('access'))
// 记录所有应用级别的日志
export const logger = log4js.getLogger('application')