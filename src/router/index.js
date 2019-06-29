import router from "vue-router";
import Vue from "vue";
import HelloWorld from "../components/HelloWorld";
import HelloEarth from "../components/HelloEarth";

Vue.use(router);

export default new router({
  routes: [
    {
      name: "Helloworld",
      path: "/hellow/:worldmsg",
      component: HelloWorld
    },
    {
      name: "Helloearch",
      path: "/helloe/:earthmsg",
      component: HelloEarth
    }
  ]
});
