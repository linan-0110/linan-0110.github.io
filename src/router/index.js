import Vue from "vue";
import VueRouter from "vue-router";
import App from '../App.vue'
import Login from "../views/Login/Login.vue";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
		path: '/',
		component: App,
		children: [
			{
				path: '',
				redirect: '/login'
			},
		]
  },
  {
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/home',
    component: Home,
    children: [
      
    ]
	},
	{
		path: '*',
		name: '*',
		component: Login
	},
];

const router = new VueRouter({
  routes
});

export default router;
