// import './bootstrap';

import { createApp } from "vue";
import router from "./router/router";
import store from "./store/store"
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(router).mount('#root')
