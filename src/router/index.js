import Vue from "vue";
import Router from "vue-router";

import Feed from "../views/MainFeed.vue";
import CreateAccount from "../views/CreateAccount.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

Vue.use(Router);

const router = new Router({
  // mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      meta: {
        guest: true,
      },
    },
    {
      name: "CreateAccount",
      path: "/createaccount",
      component: CreateAccount,
      meta: {
        guest: true,
      },
    },
    {
      name: "feed",
      path: "/feed",
      component: Feed,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: {
        guest: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next({
        path: "/feed",
        params: { nextUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});
export default router;
