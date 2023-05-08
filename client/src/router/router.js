import MainPage from "@/Pages/Main/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import RegisterPage from "@/Pages/Auth/RegisterPage.vue";


const routes = [
    {path:'/', component: MainPage},
    {path: "/register", component: RegisterPage}
]

export const router = createRouter({
    routes, history: createWebHistory()
})