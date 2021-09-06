import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Cursos from "../views/Cursos.vue";
import estudiante from "../views/estudiante/index.vue";
import estudianteDetails from "../views/estudiante/show.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dashboard",
    redirect: { name: 'Dashboard' }
  },
  {
    path: "/cursos",
    name: "Cursos",
    component: Cursos,
  },
  {
    name: "Estudiante",
    path: "/estudiante",
    component: estudiante,
  },
  {
    name: "EstudianteDetails",
    path: "/estudiante",
    props: true,
    component: estudianteDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
