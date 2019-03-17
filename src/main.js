import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import Croppa from 'vue-croppa'


import 'jquery/dist/jquery.min'
import 'vue-popperjs/dist/vue-popper.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import 'vue-croppa/dist/vue-croppa.css'

import './assets/css/style.css'

Vue.use(Croppa);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
