/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-07 09:02:16
 * @LastEditTime: 2020-12-22 13:47:21
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
export default {
  proxy: {
    '/api': {
      // API服务器的地址
      target: 'http://localhost:3001/',
      // 代理websockets
      ws: true,
      // 虚拟的站点需要更管origin
      changeOrigin: true,
      // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
      rewrite: (path: string) => path.replace(/^\/api/, '')
    },
    '/socket.io': {
      target: 'http://localhost:3001',
      ws: true,
      changeOrigin: true
    }
  }
}
