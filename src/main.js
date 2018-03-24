// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';
import store from './store'
import { Button, Input ,Menu,MenuItem} from 'iview';
import 'animate.css'


Vue.use(Vuex)
Vue.component('Button', Button);
Vue.component('Input', Input);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
