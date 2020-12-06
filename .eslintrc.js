module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  // 配置全局对象
  globals: {
    uni: true,
    wx: true,
    plus: true,
    getApp: true,
    UniApp: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 使用单引号
    quotes: [1, 'single'],
    // 禁止使用var表达式
    'no-var': 1,
    // 未修改变量不允许使用let定义
    'prefer-const': 1,
    // 对象属性需简写
    'object-shorthand': 1,
    // 禁止不必要的嵌套 const isYes = answer === 1 ? true : false;
    'no-unneeded-ternary': 2,
    // 回调中使用箭头
    'prefer-arrow-callback': 1,
    // 禁止在条件中使用常量表达式 if(true) if(1)
    'no-constant-condition': 2,
    // 如果if语句里面有return,后面不能跟else语句
    'no-else-return': 1,
    // 禁止超过三层的回调调用
    'max-nested-callbacks': ['error', 3],
    // 允许不驼峰命名
    '@typescript-eslint/camelcase': 0,
    // 允许空方法的产生(兼容构建工具)
    '@typescript-eslint/no-empty-function': [0],
    // 是否禁止使用any
    '@typescript-eslint/no-explicit-any': 0,
    // 允许函数不存在返回值
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/no-unused-vars': 0
  }
}
