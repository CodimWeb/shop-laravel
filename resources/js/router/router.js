import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    {
        path: '/cabinet',
        name: 'cabinet',
        component: () => import(/* webpackChunkName: "about" */ '../views/Cabinet.vue')
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const accessToken = localStorage.getItem('access_token');
    if(to.path == "/cabinet") {
        if(!accessToken) {
            console.log('redirect')
            return next({path: '/login'})
        }
    }
    if(to.path == "/login" || to.path == "/register" && accessToken) {
        return next({path: '/'})
    }
    next();
})

export default router
