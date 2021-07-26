import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '*',
        redirect: '/Game/Administrador/'
      },
      {
        name: 'Administrador',
        path: '/Game/Administrador/',
        component: () => import('@/views/administradores/Index'),
        meta: {
          requiresAuth: true,
          permiso: 'Administrador'
        },
        children: [
          {
            name: 'Companys',
            path: 'Pages/Compañias',
            component: () => import('@/views/administradores/pages/company/Index'),
            meta: {
              requiresAuth: true,
              permiso: 'Administrador'
            },
          },
        ],
      },
    ]
});

export default router;