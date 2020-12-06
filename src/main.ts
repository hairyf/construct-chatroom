import { createApp } from 'vue'
import { store, storeSymbol } from './store'
import router from './routes'
import App from './App.vue'
import http from './api/http.config'
http.get('/api/search').then((res) => {
  console.log(res)
})
createApp(App).use(router).provide(storeSymbol, store).mount('#app')
