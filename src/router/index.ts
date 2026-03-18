import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import AdminLayout from '@/layout/AdminLayout.vue';
import LoginView from '@/views/login/LoginView.vue';
import RegisterView from '@/views/register/RegisterView.vue';
import CrmView from '@/views/Dashboard/CRM/CrmView.vue';
import MyAnalytics from '@/views/Dashboard/analytics/MyAnalytics.vue';
import MyMarketing from '@/views/Reports/MyMarketing.vue';
import MySales from '@/views/Reports/MySales.vue';
import MyOperations from '@/views/Reports/MyOperations.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/admin/',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'CRM',
        component: CrmView,
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: MyAnalytics,
      },
      {
        path: 'marketing',
        name: 'Marketing',
        component: MyMarketing
      },
      {
        path: 'sales',
        name: 'Sales',
        component: MySales
      },
      {
        path: 'operations',
        name: 'Operations',
        component: MyOperations
      }
      // Add child routes here
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
