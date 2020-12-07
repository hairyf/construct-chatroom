<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 13:50:07
 * @LastEditTime: 2020-12-08 00:11:14
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
