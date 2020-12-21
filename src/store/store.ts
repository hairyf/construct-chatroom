/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-21 09:29:18
 * @Description: 全局数据管理
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { computed, reactive, readonly, watch } from 'vue'
import SecureLS from 'secure-ls'
import { reqLogin, reqRegister } from '../api'
const ls = new SecureLS({ encodingType: 'aes' })

// 定义数据管理
const state = reactive({
  userInfo: (ls.get('__user__') || {}) as UserInfo
})
// 定义改变数据行为
const actions = {
  login: async (username?: string, password?: string) => {
    const { data: userInfo } = await reqLogin(username, password)
    state.userInfo = userInfo
  },
  register: async (otps: RegisterOpts) => {
    const { data: userInfo } = await reqRegister(otps)
    state.userInfo = userInfo
  }
}
// 定义计算属性
const getters = {
  isLogin: computed(() => {
    return !!state.userInfo.username
  })
}

// 用户数据持久化
watch(state, () => {
  ls.set('__user__', state.userInfo)
  console.log('store-->watch', state.userInfo)
})

// 暴露储存库
export default {
  state: readonly(state),
  getters,
  actions
}
