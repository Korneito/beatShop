import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from "../views/CartView.vue";
import SuccessView from "@/views/SuccessView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
        },
        {
            path: '/success/:email/:name',
            name: 'success',
            component: SuccessView,
            props: true,
        }
    ],
})

export default router
