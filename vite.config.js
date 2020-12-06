export default {
  proxy: {
    // 代理
    '/api': {
      target: 'http://localhost:3001/', //API服务器的地址
      ws: true, //代理websockets
      changeOrigin: true, // 虚拟的站点需要更管origin
      rewrite: (path) => path.replace(/^\/api/, '') //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
    }
  }
}
