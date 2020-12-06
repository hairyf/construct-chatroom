import { inject } from 'vue'
import store from './store'

export const storeSymbol = Symbol('state')

// 页面注入(实现单例模式)
export const useStore = () => inject(storeSymbol) as typeof store

// 创建依赖
export { store }
