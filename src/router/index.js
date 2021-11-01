import Vue from "vue";
import Router from "vue-router";

import Feed from "../views/MainFeed.vue";
import CreateAccount from '../views/CreateAccount.vue'
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

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
   {
    name: "login",
    path: "/login",
    component: Login,
  },
];

const router = new Router({ routes });

export default router;
