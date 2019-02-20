import Home from "../views/Home.vue";
export default [
    {
        path: "/",
        name: "home",
        meta: {
            title: '首页',
        },
        component: Home
    },
    {
        path: "/about",
        name: "about",
        meta: {
            title: '关于',
        },
        component: () =>
            import("../views/About.vue")
    }
]
