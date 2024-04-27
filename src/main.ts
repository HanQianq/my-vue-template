import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/style/index.css';
import App from './App.vue';
import 'virtual:uno.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.use(pinia).use(ElementPlus, { locale: zhCn }).use(router);

app.mount('#app');
