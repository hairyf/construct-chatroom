<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script setup="props" lang="ts">
import { computed, ref, watchEffect, defineProps } from 'vue'
/** 定义props */
const props = defineProps({
  msg: String
})
// 定义响应式数据 count
const count = ref(0);
// 定义计算数学
const computedMsg = computed(()=> props.msg + "!!!!")
// 定义抓取副作用
watchEffect(()=>{
  console.log(computedMsg.value)
})
export default {}
</script>