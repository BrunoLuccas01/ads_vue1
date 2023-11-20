import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

//..importando Router
import router from '@/router/router.js'

//..use o router antes de montar o aplicativo
createApp(App).use(router).mount('#app')
