import { createApp } from "vue";

import axios from "axios";
import VueAxios from "vue-axios";

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'

import $pushToastMessage from '@/methods/pushToastMessage';

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.config.globalProperties.$pushToastMessage = $pushToastMessage;

app.use(router);
app.use(VueAxios, axios);
app.component('Loading', Loading);
app.mount("#app");
