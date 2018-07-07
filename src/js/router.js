import Index from "../components/index.vue";
import About from "../components/about.vue";
import Spec from "../components/spec.vue";
import Reading from "../components/reading.vue";

export default {
  routes: [
    {
      path: "/index",
      component: Index
    },
    {
      path: "/reading/:chapter",
      component: Reading
    },
    {
      path: "/spec",
      component: Spec
    },
    {
      path: "/about",
      component: About
    }
  ]
};
