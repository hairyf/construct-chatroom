/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-20 00:38:14
 * @Description: 进行登录
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { http } from './http.config'
/* api->index.js 统一命名规范
 * 1. 接口暴露前缀统一为req -> request(请求)
 * 2. 需详细描述数据时, 在src/types/response.d.ts中声明
 * Template: export const req[name] = () => http.get("/api/list")
 */

// 暴露请求配置
export const httpConfig = http.defaults
// 进行登录
export const reqLogin = (username?: string, password?: string) => {
  return http.post<UserInfo>(
    '/user/login',
    { username, password },
    { custom: { loading: true } }
  )
}
// 进行注册
export const reqRegister = (data: RegisterOpts) => {
  return http.post<UserInfo>('/user/register', data)
}
// 上传图片
export const reqUploadImage = (formFile: FormData) => {
  const headers = { 'Content-Type': 'multipart/form-data' }
  return http.post<string>('common/upload_image', formFile, { headers })
}
