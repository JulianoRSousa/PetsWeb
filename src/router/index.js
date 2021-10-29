import Vue from "vue";
import Router from "vue-router";

import Feed from "../views/MainFeed.vue";
import CreateAccount from '../views/CreateAccount.vue'
import Home from "../views/Home.vue";

Vue.use(Router);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "CreateAccount",
    path: "/createaccount",
    component: CreateAccount,
  },
  {
    name: "feed",
    path: "/feed",
    component: Feed,
  },
];

const router = new Router({ routes });

export default router;
