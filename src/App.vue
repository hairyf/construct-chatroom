<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 13:50:07
 * @LastEditTime: 2020-12-08 01:34:09
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + V⚡ite" />
  <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/home">Go to Foo</router-link>
    |
    <router-link to="/login">Go to Bar</router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { useRoute, useRouter } from 'vue-router'
import { watchEffect } from 'vue'
// 当前路由
const route = useRoute()
console.log(route.path)
console.log(route.params)
// 当前路由器
const router = useRouter()
// router.back()
// router.replace('/home')
// router.push('/login')
// 前置路由守卫
router.beforeEach(() => {
  console.log('--前置路由守卫--')
})
// 后置路由守卫
router.afterEach(() => {
  console.log('--后置路由守卫--')
})
// 监听当前路由变化
// watchEffect(() => {
//   console.log(route)
// })
</script>
<style lang="scss">
@import './style/class.scss';
@import 'vant/lib/index.css';
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
