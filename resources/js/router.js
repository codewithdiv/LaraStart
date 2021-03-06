import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import dashboard from './components/Dashboard'
import profile from './components/Profile'
import users from './components/Users'
import notFound from './components/NotFound'

const routes = [{
        path: '/dashboard',
        component: dashboard,
        name: 'dashboard'
    },
    {
        path: '/users',
        component: users,
        name: 'users'
    },
    {
        path: '/profile',
        component: profile,
        name: 'profile'
    },
    {
        path: '*',
        component: notFound,
        name: 'notFound'
    },
]


export default new Router({
    mode: 'history',
    routes
})
