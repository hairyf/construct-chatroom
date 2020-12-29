<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 23:50:38
 * @LastEditTime: 2020-12-29 11:25:08
 * @Description: 首页
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <scroll-view
    :pull-down-refresh="true"
    :pull-up-load="true"
    :pull-up-load-end="isEnd"
    @pullup="onPullupHooks"
    @pulldown="onPulldownHooks"
  >
    <!-- 顶部下拉刷新插糟(提示内容, 当pull-down-refresh为true时展示) -->
    <template v-slot:pull-down-tips>
      <div class="pull-status">上拉刷新列表...</div>
    </template>
    <!-- 顶部下拉刷新插糟(加载内容, 当@pulldown执行中显示) -->
    <template v-slot:pull-down-loading>
      <div class="pull-status">加载中...</div>
    </template>
    <!-- 滑动块内容插糟 -->
    <template v-slot:scroll-content>
      <div class="scroll-item" v-for="(item, index) in emojis" :key="index">
        <van-image
          round
          width="10rem"
          height="10rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </template>
    <!-- 底部上拉刷新插糟(提示内容, 当pull-up-load为true时展示) -->
    <template v-slot:pull-up-tips>
      <div class="pull-status">下拉加载更多...</div>
    </template>
    <!-- 底部上拉刷新插糟(加载内容, 当@pullup执行中显示) -->
    <template v-slot:pull-up-loading>
      <div class="pull-status">加载中...</div>
    </template>
    <!-- 底部上拉刷新插糟(结束内容, 当pull-up-load-end为true时展示) -->
    <template v-slot:pull-up-end>
      <div class="pull-status">已经没有了噢~~</div>
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
/**
 * scroll-view 滑动块
 * @description 用于定义滑动区域, 可开启上拉/下拉更新
 * @event {Function}
 */
import { onMounted, ref } from 'vue'
import ScrollView from '../components/scroll-view.vue'
const emojis = ref([
  '😀 😁 😂 🤣 😃',
  '😄 😅 😆 😉 😊',
  '😫 😴 😌 😛 😜',
  '👆🏻 😒 😓 😔 👇🏻',
  '😑 😶 🙄 😏 😣',
  '😞 😟 😤 😢 😭',
  '................'
])
const isEnd = ref(false)

const awaitPromise = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time)
  })
}
// 上拉刷新测试
const onPullupHooks = async (finish: any) => {
  await awaitPromise(1000)
  finish()
}
// 下拉刷新测试
const onPulldownHooks = async (finish: any) => {
  await awaitPromise(5000)
  finish()
}
</script>
<style lang="scss">
@import '../style/index.scss';

.scroll-item {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #eee;
  text-align: center;
  &:nth-child(2n) {
    background-color: #f3f5f7;
  }
  &:nth-child(2n + 1) {
    background-color: #42b983;
  }
}
.pull-status {
  height: px2rem(80);
  line-height: px2rem(80);
  font-size: px2rem(26);
  text-align: center;
  color: #686868;
}
</style>
