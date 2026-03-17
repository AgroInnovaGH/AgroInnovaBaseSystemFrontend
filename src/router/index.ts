import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import AdminLayout from '@/layout/AdminLayout.vue';
import LoginView from '@/views/login/LoginView.vue';
import RegisterView from '@/views/register/RegisterView.vue';
import CrmView from '@/views/Dashboard/CRM/CrmView.vue';
import MyAnalytics from '@/views/Dashboard/analytics/MyAnalytics.vue';
import CreateRequestPage from '@/views/Requests/routes/CreateRequestPage.vue';
import InputsPage from '@/views/Requests/routes/InputsPage.vue';
import AkokoSikaPage from '@/views/Requests/routes/AkokoSikaPage.vue';
import SellingPage from '@/views/Requests/routes/SellingPage.vue';
import BuyingPage from '@/views/Requests/routes/BuyingPage.vue';

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
        path: 'requests/buying',
        name: 'Buying',
        component: BuyingPage,
      },
      {
        path: 'requests/selling',
        name: 'Selling',
        component: SellingPage,
      },
      {
        path: 'requests/akoko_sika',
        name: 'Akoko Sika',
        component: AkokoSikaPage,
      },
      {
        path: 'requests/inputs',
        name: 'Inputs',
        component: InputsPage,
      },
      {
        path: 'create_request/:request',
        name: 'Create Request',
        component: CreateRequestPage,
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: MyAnalytics,
      },
      // Add child routes here
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
