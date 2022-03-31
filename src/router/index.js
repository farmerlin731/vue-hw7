import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/FrontSide.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "products",
        component: () => import("../views/ProductsFront.vue"),
      },
      {
        path: "about",
        component: () => import("../views/About.vue"),
      },

    ]
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/HomeBack.vue"),
      },
      {
        path: "products",
        component: () => import("../views/ProductsBack.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/OrdersBack.vue"),
      },

    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
    }
  },
});

export default router;
