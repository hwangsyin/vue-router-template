import dashboardRoutes from "@/modules/dashboard/routes";
import userRoutes from "@/modules/user/routes";

export default [
  { path: "/", name: "home", component: () => import("./Home.vue") },
  { path: "/about", name: "about", component: () => import("./About.vue") },
  { path: "/login", name: "login", component: () => import("./Login.vue") },
  { path: "/u/0", name: "console", component: () => import("./Console.vue"), children: [
    ...dashboardRoutes, ...userRoutes
  ] }
];
