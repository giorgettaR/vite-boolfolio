import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Contact from './pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',name: 'home', component: Home },
        { path: '/portfolio',name: 'portfolio', component: Portfolio },
        { path: '/contact',name: 'contact', component: Contact }

    ],
})

createApp(App).use(router).mount('#app')
