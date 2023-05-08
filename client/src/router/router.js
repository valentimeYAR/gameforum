import MainPage from "@/Pages/Main/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import RegisterPage from "@/Pages/Auth/RegisterPage.vue";
import LoginPage from "@/Pages/Auth/LoginPage.vue";


const routes = [
    {path:'/', component: MainPage},
    {path: "/register", component: RegisterPage},
    {path: "/login", component: LoginPage}
]

export const router = createRouter({
    routes, history: createWebHistory()
})