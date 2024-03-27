import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// router를 Vue 인스턴스에 적용
app.use(router);

app.mount('#app');