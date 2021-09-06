import Vue from "vue";
import VueRouter from "vue-router";
import IndexMy from "../views/IndexMy";
import Portfolio from "../views/Portfolio";
import Detail from "../views/Portfolio/Detail.vue";

Vue.use(VueRouter);



// 路由
const routes = [
  // 履歷
  { path: "/", name: "IndexMy", component: IndexMy },
  // 作品集
  { path: "/Portfolio", name: "Portfolio", component: Portfolio },
  // 作品集詳細頁
  {
    path: "/Portfolio/:id?",
    name: "Portfolio-Detail",
    component: Detail,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
