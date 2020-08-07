import App from '../App.vue'
import login from "../views/Login/Login.vue";
import home from "../views/Home/Home.vue";
import test from "../views/test/test.vue";
import test1 from "../views/test/test1.vue";
import test2 from "../views/test/test2.vue";
import test3 from "../views/test/test3.vue";

export default [
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
		component: login
	},
	{
		path: '/home',
		component: home,
		children: [
			{
				path: 'test',
				name: 'test',
				component: test
			},
			{
				path: 'test1',
				name: 'test1',
				component: test1
			},
			{
				path: 'test2',
				name: 'test2',
				component: test2
			},
			{
				path: 'test3',
				name: 'test3',
				component: test3
			},
		]
	},
	{
		path: '*',
		name: '*',
		component: login
	},
];