import Vue from "vue";
import Router from "vue-router";
import FooterBar from "@/components/FooterBar";
import main from "../views/main.vue";
import tool from "../views/tool.vue";
import my from "../views/my.vue";
import details from "../views/details.vue";
import choose from "../views/choose.vue";
import cart from "../views/cart.vue";
import all_order from "../views/all_order.vue";
import news from "../views/news.vue";
import need from "../views/need.vue";
import qiangou from "../views/qiangou.vue";
import fabu from "../views/fabu.vue";
import mifenka from "../views/mifenka.vue";
// import fenlei from "../views/fenlei.vue";
import login from "../views/login.vue";
import notfound from "../views/404.vue";
import load from "../views/load.vue";
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
			component: () =>import("../views/login.vue"),

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
			component: () =>import("../views/fenlei.vue")
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