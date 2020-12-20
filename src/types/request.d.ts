/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-21 00:07:49
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
/* 请求配置/响应的补充说明 */
interface ListOpts {
  page: number
  limit: number
}
interface UserInfo {
  autograph: string
  avatar: string
  createtime: string
  gender: string
  nickname: string
  password: string
  token: string
  username: string
  _id: string
}
interface RegisterOpts {
  avatar: string
  username: string
  password: string
  gender: string
}
