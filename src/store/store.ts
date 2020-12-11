/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-10 17:42:09
 * @Description: 全局数据管理
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { computed, reactive, readonly } from 'vue'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ encodingType: 'aes' })
const lsState = ls.get('__store__')
// 定义全局数据
const state = reactive({
  userInfo: {} as UserInfo
})

// 定义改变数据方法
const actions = {
  login: async (username?: string, password?: string) => {
    const { data: userInfo } = await reqLogin(username, password)
    state.userInfo = userInfo
  }
}

// 定义计算属性
const getters = {
  isLogin: computed(() => {
    return !!state.userInfo.name
  })
}

// 数据持久化

// 暴露储存库
export default {
  state: readonly(state),
  getters,
  actions
}
