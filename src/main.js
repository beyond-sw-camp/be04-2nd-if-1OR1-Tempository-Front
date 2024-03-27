import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 부트스트랩 적용
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// npm install vue bootstrap bootstrap-vue-3
// npm install vuex@next
// npm install axios

const app = createApp(App);

// router를 Vue 인스턴스에 적용
app.use(router);

// 부트스트랩 적용
app.use(BootstrapVue3);

app.use(store);

app.mount('#app');