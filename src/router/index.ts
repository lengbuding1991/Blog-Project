import { createRouter, createWebHistory } from "vue-router";
// 你的路由配置
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";
import DetailView from "../views/DetailView.vue";
import ReleaseView from "../views/ReleaseView.vue";
import LoginView from "../views/LoginView.vue";
import RegistView from "../views/RegistView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/list",
    name: "ListView",
    component: ListView,
  },
  {
    path: "/detail",
    name: "DetailView",
    component: DetailView,
  },
  {
    path: "/release",
    name: "ReleaseView",
    component: ReleaseView,
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/regist",
    name: "RegistView",
    component: RegistView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
  const isLoggedIn = !!token;

  // 如果已登录，阻止访问登录和注册页面
  if (isLoggedIn && (to.name === 'LoginView' || to.name === 'RegistView')) {
    next('/');
    return;
  }

  // 检查需要认证的路由
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
