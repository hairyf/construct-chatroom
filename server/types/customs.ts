/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-10 23:32:54
 * @LastEditTime: 2020-12-10 23:43:59
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
interface BaseDb {
  _id: string
  __v: number
}
interface GroupModelType extends BaseDb {
  groupname: string
  avatar: string
  founder: string
  members: {
    user_id: string
    createtime: string | number
  }[]
  autograph: string
  createtime: string | number
}

interface UserModelType extends BaseDb {
  avatar: string
  username: string
  password: string
  gender: 'women' | 'men'
  nickname: string
  autograph: string
  createtime: string | number
}
