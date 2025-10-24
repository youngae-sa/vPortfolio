import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroSection from '../components/IntroSection.vue'
import WorkProject from '../components/WorkProject.vue'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children:[
                {
                    path:'/',
                    // component: IntroSection,
                    component:WorkProject
                },
                {
                    path:'workProject',
                    component: WorkProject,
                },
                {
                    path:'workProject',
                    component: WorkProject,
                },
                {
                    path:'workProject',
                    component: WorkProject,
                }
            ]

        }
    ]
})

export default router