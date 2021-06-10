import { createApp } from 'vue'
import App from './App.vue'
import installPlugin from './plugins/index.js'
import router from './router/index'
import store from './store/index'

import '@/styles/index.less'
import 'es6-promise/auto'


const app = createApp(App)
app.config.productionTip = false;

installPlugin.installAntd(app)
app.use(router)
app.use(store)
app.mount('#app')