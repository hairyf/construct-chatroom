/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-19 17:15:14
 * @LastEditTime: 2020-12-19 17:50:42
 * @Description: 共用请求模块
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import Router from 'koa-router'
import { useMulter } from '../utils'
const common = new Router()
const upload = useMulter()

/** 上传单文件 */
common.post('/upload', upload.single('file'), (ctx) => {})
/** 上传多文件 */
common.post('/uploads', upload.array('files', 6), (ctx) => {})

export default common
