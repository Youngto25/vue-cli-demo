import Vue from "vue";
import App from "./App.vue";
import rt from "./router/index.js";
import Vuex from "vuex"

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    num: 33
  }
})

Vue.config.productionTip = false;

new Vue({
  router: rt,
  store,
  render: h => h(App)
}).$mount("#app");