import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details/Details.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
