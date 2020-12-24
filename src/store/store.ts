/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-24 13:26:35
 * @Description: 全局数据管理
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { computed, reactive, readonly, watch, watchEffect } from 'vue'
import SecureLS from 'secure-ls'
import { httpConfig, reqLogin, reqRegister } from '../api'
import { socket } from '../socket.io'

// 创建加密缓存处理
const ls = new SecureLS({ encodingType: 'aes' })

// 定义数据管理
const state = reactive({
  userInfo: {} as UserInfo
})

// 定义改变数据行为
const actions = {
  login: async (username?: string, password?: string) => {
    const { data: userInfo } = await reqLogin(username, password)
    state.userInfo = userInfo
    socket.emit('login', state.userInfo._id)
  },
  register: async (otps: RegisterOpts) => {
    const { data: userInfo } = await reqRegister(otps)
    state.userInfo = userInfo
    socket.emit('login', state.userInfo._id)
  }
}

// 定义计算属性
const getters = {
  isLogin: computed(() => {
    return !!state.userInfo.username
  })
}

// 用户数据持久化
state.userInfo = ls.get('__user__') || {}
watch(state, () => {
  ls.set('__user__', state.userInfo)
  console.log('store-->watch', state.userInfo)
})

// 绑定请求授权
watchEffect(() => {
  const token = state.userInfo.token ?? ''
  httpConfig.headers.common['Authorization'] = token
})

// 暴露储存库
export default {
  state: readonly(state),
  getters,
  actions
}
