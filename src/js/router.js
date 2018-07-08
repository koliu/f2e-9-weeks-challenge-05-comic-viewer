import Index from "../components/index.vue";
import About from "../components/about.vue";
import Spec from "../components/spec.vue";
import Reading from "../components/reading.vue";

export default {
  routes: [
    {
      path: "/index",
      component: Index,
      props: {
        loggedIn: true
      }
    },
    {
      path: "/reading/:chapter",
      component: Reading,
      props: {
        loggedIn: true
      }
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
