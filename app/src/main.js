import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from "vee-validate";
import VueHtmlToPaper from 'vue-html-to-paper';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);
global.moment = moment;

import "./assets/js/jquery";
// Tabulator
import 'tabulator-tables/dist/css/bootstrap/tabulator_bootstrap.css';
var Tabulator = require('tabulator-tables');
global.Tabulator = Tabulator;


import "bootstrap";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/css/style.css";

Vue.config.productionTip = false
const options = {
  name: '',
  styles: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
  ]
}

Vue.use(VueHtmlToPaper, options);

Vue.use(VeeValidate);

Vue.filter('formatDate', (value) => {
  // const date = new Date(value);
  if (value) {
    return moment(String(value)).format('DD-MMM-YYYY')
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
