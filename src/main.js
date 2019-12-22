import Vue from 'vue';
// eslint-disable-next-line import/no-unresolved,import/extensions
import BootstrapVue from 'bootstrap-vue';
import VueNoty from 'vuejs-noty';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line import/no-unresolved
import 'bootstrap/dist/css/bootstrap.css';
// eslint-disable-next-line import/no-unresolved
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuejs-noty/dist/vuejs-noty.css';
import Toast from './mixins/Toast';
import Auth from './mixins/Auth';

Vue.use(BootstrapVue);
Vue.use(VueNoty, {
  timeout: 4000,
  progressBar: true,
  layout: 'topRight',
});
Vue.mixin(Toast);
Vue.mixin(Auth);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
