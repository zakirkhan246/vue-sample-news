import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

new Vue({
  router,
  render(h) { return h(App); },
}).$mount('#app');
