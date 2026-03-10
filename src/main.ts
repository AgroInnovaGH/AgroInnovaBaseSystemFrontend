import './assets/main.css';
import 'vue3-toastify/dist/index.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Vue3Toastify, { toast } from 'vue3-toastify';

const app = createApp(App);

app.use(createPinia());

app.use(Vue3Toastify, {
  autoClose: 600,
  position: toast.POSITION.TOP_RIGHT,
});


app.use(router);

app.mount('#app');
