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
    }
  }
}
