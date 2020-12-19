<!--
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 23:50:38
 * @LastEditTime: 2020-12-20 00:37:43
 * @Description: 登录页面
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
-->
<template>
  <header>
    <van-tabs
      v-model:active="currentTab"
      color="#fff"
      title-active-color="#1989FA"
    >
      <van-tab
        v-for="(item, index) in tabs"
        :key="index"
        :title="item.text"
      ></van-tab>
    </van-tabs>
  </header>
  <!-- 登录窗口 -->
  <main class="login-main" v-if="currentTab === 0">
    <van-image
      width="12rem"
      height="10rem"
      radius="1rem"
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-cell-group>
      <van-field
        v-model="username"
        input-align="center"
        placeholder="请输入用户名"
      />
      <van-field
        type="password"
        v-model="password"
        input-align="center"
        placeholder="请输入密码"
      />
    </van-cell-group>
  </main>
  <!-- 注册窗口 -->
  <main class="register-main" v-if="currentTab === 1">
    <van-uploader
      multiple
      :max-count="1"
      :max-size="500 * 1024"
      :after-read="onAfterRead"
      upload-text="上传头像"
      preview-size="6rem"
      v-model="fileList"
    />
    <van-cell-group>
      <van-field label-width="2rem" label="账号" placeholder="请输入账号" />
      <van-field label-width="2rem" label="密码" placeholder="请输入密码" />
    </van-cell-group>
  </main>
  <footer>
    <van-button class="submit-btns" type="primary" round @click="onSubmit">{{
      '进行' + tabs[currentTab].text
    }}</van-button>
  </footer>
</template>
<script setup lang="ts">
import { store } from '../store'
import { ref, watchEffect } from 'vue'
import { reqUploadImage } from '../api'
interface AfterReadEvent {
  content: string
  file: File
  message: string
  status: string
}

// 导航栏数据
const currentTab = ref(0)
const tabs = ref([
  { id: 0, text: '登录' },
  { id: 1, text: '注册' }
])
// 表单数据
const username = ref('')
const password = ref('')
const fileList = ref<{ url: string }[]>([])
watchEffect(() => {
  console.log(fileList)
})
// 文件读取完成后上传图片
const onAfterRead = async (event: AfterReadEvent) => {
  const formFile = new FormData()
  formFile.append('file', event.file)
  const imageUrl = await reqUploadImage(formFile)
  console.log(imageUrl)
}
// 进行提交(登录/注册)
const onSubmit = () => {
  if (currentTab.value === 0) {
    store.actions.login(username.value, password.value)
  }
  if (currentTab.value === 1) {
    store.actions.register
  }
}
</script>
<style lang="scss">
@import '../style/index.scss';
header {
  padding: 0 px2rem(160);
  padding-top: px2rem(60);
  padding-bottom: px2rem(25);
}
.van-tab {
  font-size: px2rem(35);
}
.submit-btns {
  display: block;
  width: px2rem(580);
  margin-top: px2rem(35);
  margin: 0 auto;
}
.van-image {
  display: block;
  margin: 0 auto;
  margin-bottom: px2rem(45);
}
.login-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-tab--active span {
    font-weight: bold;
  }
  .van-cell.van-field {
    width: px2rem(580);
    background: #f2f2f2;
    &:not(:first-child) {
      margin-top: px2rem(60);
    }
  }
}
.register-main {
  margin: 0 px2rem(25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .van-cell-group {
    width: 100%;
    margin-top: px2rem(25);
  }
}
footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: px2rem(60);
}
</style>
