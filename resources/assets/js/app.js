

require('./bootstrap');
window.Vue = require('vue');


 import Vue from 'vue'
 import router from './router'
 import VueResource from 'vue-resource'

 Vue.use(VueResource)
 /*Vue.use(VueResource)*/
Vue.component('app', require('./App.vue'));

const app = new Vue({
  router,
  el: '#app'
});
