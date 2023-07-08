import { createRouter, createWebHistory } from 'vue-router'
const routes =  [
  {
    name: "Home",
    path: "/",
    components:{
      default:() => import("../views/Home.vue"),
      leftBar:() => import("../views/Chat.vue")
    },
    meta: {
      requiresAuth: true,
    },
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
