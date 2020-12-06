import { reactive, readonly } from "vue";

// 定义全局数据
const state = reactive({ counter: 0 });

// 定义改变数据方法
const actions = {
  increment: () => state.counter++
};

// 暴露储存库
export default {
  state: readonly(state),
  actions
};
