import Vue from 'vue';
import Router from 'vue-router';
import VueCookies from 'vue-cookies';
import Navbar from './components/navbar/Navbar';
import Dashboard from './views/dashboard/Dashboard.vue';
import { RocksideRepository } from './repository/RocksideRepository';

Vue.use(Router);
Vue.use(VueCookies);

export default new Router({
    routes: [
        {
            path: '/',
            component: Navbar,
            beforeEnter: async (to, from, next) => {
                await auth();
                next();
            },
            children: [
                {
                    path: '*',
                    name: 'dashboard',
                    component: Dashboard,
                },
            ],
        },
    ],
});

async function auth() {
    const storedIdentity = RocksideRepository.getInstance().identity;
    if (storedIdentity === null || storedIdentity === undefined || storedIdentity === '') {
      const newIdentity = await RocksideRepository.getInstance().createIdentity();
      localStorage.setItem('identity', newIdentity);
    }
}
