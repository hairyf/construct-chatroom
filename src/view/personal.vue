<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 23:50:38
 * @LastEditTime: 2020-12-07 23:54:03
 * @Description: 个人主页
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <span>personal</span>
</template>

<script setup="props" lang="ts">
import { useRoute, useRouter } from 'vue-router'
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
</script>
