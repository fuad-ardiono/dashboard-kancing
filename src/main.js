import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved,import/extensions
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line import/no-unresolved
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
