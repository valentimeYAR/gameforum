import MainPage from "@/Pages/Main/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {path:'/', component: MainPage},
]

export const router = createRouter({
    routes, history: createWebHistory()
})