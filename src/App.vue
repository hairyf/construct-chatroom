<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 13:50:07
 * @LastEditTime: 2020-12-08 01:34:09
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <router-view></router-view>
  <van-tabbar v-model="currentTabBarIndex" v-if="isLogin">
    <van-tabbar-item
      v-for="(item, index) in tabBarItems"
      :key="index"
      :icon="item.icon"
      >{{ item.label }}</van-tabbar-item
    >
    <div
      :style="{ left: currentTabBarIndex * 33.3333333333333333 + '%' }"
      class="block"
    />
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from './store'
const store = useStore()
const router = useRouter()
const route = useRoute()
const isLogin = store.getters.isLogin
const tabBarItems = ref([
  { icon: 'chat-o', label: '首页', path: '' },
  { icon: 'friends-o', label: '联系人' },
  { icon: 'contact', label: '个人中心' }
])
const currentTabBarIndex = ref(0)

watchEffect(() => {
  !isLogin.value && router.replace('/login')
})
</script>
<style lang="scss">
@import './style/class.scss';
@import 'vant/lib/index.css';
.van-tabbar {
  .block {
    position: absolute;
    width: 33.3333333333333333%;
    height: 100%;
    background: #e4f2ff;
    transition: 0.3s;
    left: 0;
  }
  .van-tabbar-item {
    position: relative;
    z-index: 2;
    transition: 0.3s;
  }
  .van-tabbar-item--active {
    background: none;
  }
}
</style>
