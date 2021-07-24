import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHamburger);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
