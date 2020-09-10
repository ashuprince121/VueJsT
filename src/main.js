import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.filter("uppercase", function (value) {
  return value.toUpperCase();
});
new Vue({
  el: "#app",
  data: {
    message: "small to uppercase"
  }
});
