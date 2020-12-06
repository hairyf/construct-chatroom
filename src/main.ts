import { createApp } from 'vue'
import { store, storeSymbol } from './store'
import router from './routes'
import App from './App.vue'
import Vant from 'vant'
createApp(App).use(router).use(Vant).provide(storeSymbol, store).mount('#app')
