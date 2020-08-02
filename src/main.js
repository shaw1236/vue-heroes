import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue';
import routes from './routes/Routes';

const router = new VueRouter({
  mode: 'history', // add 'history' mode
  routes
}); 

new Vue({
  el: '#app',
  render: h => h(App),
  router: router 
});