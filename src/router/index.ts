import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import AdminLayout from '@/layout/AdminLayout.vue';
import LoginView from '@/views/login/LoginView.vue';
import RegisterView from '@/views/register/RegisterView.vue';
import CrmView from '@/views/Dashboard/CRM/CrmView.vue';
import MyAnalytics from '@/views/Dashboard/analytics/MyAnalytics.vue';

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
