/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-06 14:32:38
 * @LastEditTime: 2020-12-21 13:07:54
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  {
    // 主页
    path: '/home',
    component: () => import('../view/message.vue'),
    meta: { title: '消息' }
  },
  {
    // 登录页面
    path: '/login',
    component: () => import('../view/login.vue'),
    meta: { title: '登录' }
  },

  {
    // 机器人回复
    path: '/robot',
    component: () => import('../view/robot.vue'),
    meta: { title: '机器人' }
  },
  {
    // 联系人
    path: '/contacts',
    component: () => import('../view/contacts.vue'),
    meta: { title: '联系人' }
  },
  {
    // 添加联系人
    path: '/contactsInc',
    component: () => import('../view/contactsInc.vue'),
    meta: { title: '添加联系人' }
  },
  {
    // 个人中心
    path: '/personal',
    component: () => import('../view/personal.vue'),
    meta: { title: '个人中心' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, form) => {
  if (to.meta.title) document.title = to.meta.title
})
export default router
