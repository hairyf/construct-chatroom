<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 13:50:07
 * @LastEditTime: 2020-12-21 00:20:27
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect, defineProps } from 'vue'

/** 定义props */
const props = defineProps({
  msg: String
})
// 定义响应式数据 count
const count = ref(0)
// 定义计算属性
const computedMsg = computed(() => props.msg + '!!!!')
// 定义抓取副作用
// watchEffect(() => {
//   console.log(computedMsg.value, '12321')
// })
</script>
