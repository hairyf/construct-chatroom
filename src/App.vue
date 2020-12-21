<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 13:50:07
 * @LastEditTime: 2020-12-21 10:45:59
 * @Description: 
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <van-nav-bar :title="route.meta.title" />
  <div class="router-content">
    <router-view></router-view>
  </div>
  <van-tabbar v-model="currentTabBarIndex" v-if="route.path !== '/login'">
    <van-tabbar-item
      v-for="(item, index) in tabBarItems"
      :key="index"
      :icon="item.icon"
      >{{ item.label }}</van-tabbar-item
    >
    <div
      :style="{ left: currentTabBarIndex * (100 / 3) + '%' }"
      class="block"
    />
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from './store'
const store = useStore()
const router = useRouter()
const route = useRoute()
// 底部导航切换
const tabBarItems = ref([
  { icon: 'chat-o', label: '消息', path: '/home' },
  { icon: 'friends-o', label: '联系人', path: '/contacts' },
  { icon: 'contact', label: '个人中心', path: '/personal' }
])
const currentTabBarIndex = ref(0)
watch(currentTabBarIndex, (newVal) => {
  router.replace(tabBarItems.value[newVal].path)
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
