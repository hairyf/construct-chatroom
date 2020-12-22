/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-22 12:53:03
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createApp } from 'vue'
import { store, storeSymbol } from './store'
import router from './routes'
import App from './App.vue'
import Vant from 'vant'

import './plugins/better-scroll'
import './socket.io'

createApp(App).use(router).use(Vant).provide(storeSymbol, store).mount('#app')
