import Vue from "vue";
import Router from "vue-router";
import FooterBar from "@/components/FooterBar";
import main from "../pages/main.vue";
import tool from "../pages/tool.vue";
import my from "../pages/my.vue";
import details from "../pages/details.vue";
import choose from "../pages/choose.vue";
import cart from "../pages/cart.vue";
import all_order from "../pages/all_order.vue";
import news from "../pages/news.vue";
import need from "../pages/need.vue";
import qiangou from "../pages/qiangou.vue";
import fabu from "../pages/fabu.vue";
import mifenka from "../pages/mifenka.vue";
import fenlei from "../pages/fenlei.vue";
import login from "../pages/login.vue";
import notfound from "../pages/404.vue";
import load from "../pages/load.vue";
Vue.use(Router);
export default new Router({
	// mode: "history", //改为history.路由中没有#号
	routes: [
		// {
		//     path: "/",
		//     name: "login",
		//     component: login,

		// },
		{
			path: "/login",
			name: "login",
			// component: login,
			component: () =>import("../pages/login.vue"),

		},
		{
			path: "/",
			name: "main",
			component: main
		},
		{
			path: "/main",
			name: "main",
			component: main
		},
		{
			path: "/fenlei",
			name: "fenlei",
			component: fenlei
		},
		{
			path: "/tool",
			name: "tool",
			component: tool
		},
		{
			path: "/cart",
			name: "cart",
			component: cart
		},
		{
			path: "/my",
			name: "my",
			component: my
		},
		{
			path: "/choose",
			name: "choose",
			component: choose
		},
		{
			path: "/details",
			name: "details",
			component: details
		},
		{
			path: "/all_order",
			name: "all_order",
			component: all_order
		},
		{
			path: "/news",
			name: "news",
			component: news
		},
		{
			path: "/need",
			name: "need",
			component: need
		},
		{
			path: "/qiangou",
			name: "qiangou",
			component: qiangou
		},
		{
			path: "/fabu",
			name: "fabu",
			component: fabu
		},
		{
			path: "/mifenka",
			name: "mifenka",
			component: mifenka
		},
		{
			path: "/load",
			name: "load",
			component: load
		},
		{
			path: "*",
			name: "notfound",
			component: notfound
		},
       
	]
});