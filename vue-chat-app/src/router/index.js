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
  {
    name:"Login",
    path:"/login",
    components:{
      default:() =>import("../views/LRImage.vue"),
      leftBar:()=>import("../views/Login.vue")
    },
  },
  {
    name:"Register",
    path:"/register",
    components:{
      default:() =>import("../views/LRImage.vue"),
      leftBar:()=>import("../views/Register.vue")
    },
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
	const isLoggedIn = localStorage.getItem('isLoggedIn');
	if (!to.meta.requiresAuth) {
		isLoggedIn &&
		(to.fullPath == "/login" || to.fullPath == "/register")
			? next({ name: "Home" })
			: next();
	} else {
		isLoggedIn ? next() : next({ name: "Login" });
	}
});
export default router
