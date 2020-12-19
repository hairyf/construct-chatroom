/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 15:57:55
 * @LastEditTime: 2020-12-19 17:40:34
 * @Description: 服务器工具集合
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import multer from '@koa/multer'
import path from 'path'

/** 上传模块 */
export const useMulter = () => {
  const upload = multer({
    // 基本储存路径
    dest: '/upload',
    // 路径, 名称修改器, 默认随机名称且无后缀
    storage: multer.diskStorage({
      filename: (request, file, callback) => {
        // 获取后缀名
        const ext = path.extname(file.originalname)
        // 设置默认名
        callback(null, `${Date.now()}${ext}`)
      }
    }),
    // 文件过滤器
    fileFilter: (request, file, callback) => {
      // 这个函数应该调用 `callback` 用boolean值来指示是否应接受该文件
      // file有该文件的后缀名 或者其他信息
      // 获取文件后缀名 originalname 属性是名称
    },
    // 文件大小相关设置 (可选)
    limits: {
      // 文件最大长度, 默认无限
      fileSize: 5 * 1024,
      // 文件最大数量
      files: 5,
      // 键值对最大组数, 默认2000
      headerPairs: 2000
    }
  })
  return upload
}
