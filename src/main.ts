import { createApp } from 'vue'
import { store, storeSymbol } from "./store";
import router from "./router"
import App from './App.vue'
createApp(App)
  .use(router)
  .provide(storeSymbol, store)
  .mount('#app')
