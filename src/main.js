import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Contact from './pages/Contact.vue'
import Project from './pages/Project.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/portfolio', name: 'portfolio', component: Portfolio },
        { path: '/contact', name: 'contact', component: Contact },
        { path: '/project/:slug', name: 'project', component: Project, props: true },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

    ],
})

createApp(App).use(router).mount('#app')
