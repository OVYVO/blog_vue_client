import { createApp } from 'vue'
import App from './App.vue'
import installPlugin from './plugins/index.js'
import router from './router/index'
import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.less'
import 'es6-promise/auto'

// import VueMarkdownEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
// import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// import Prism from 'prismjs';

// VueMarkdownEditor.use(vuepressTheme, {
//   Prism
// });

const app = createApp(App)
app.config.productionTip = false;

installPlugin.installElement(app)
app.use(router)
app.use(store)
app.use(VueMarkdownEditor)
app.mount('#app')