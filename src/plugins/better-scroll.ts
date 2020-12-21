/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-21 14:06:18
 * @LastEditTime: 2020-12-21 14:14:34
 * @Description: 滑动扩展
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import BScroll from '@better-scroll/core'
import PullDown from '@better-scroll/pull-down'
import Pullup from '@better-scroll/pull-up'
// 扩展下拉刷新的能力
BScroll.use(PullDown)
// 扩展上拉加载的能力
BScroll.use(Pullup)
