import type { Component } from 'vue';
import {
  IconShareplay,
  IconFileDescription,
  IconSend,
  IconTruckDelivery,
  IconWorld,
  IconRecycle,
  IconTractor,
  IconBuildingWarehouse,
  IconMessage2,
  IconUsers,
  IconSettings,
  IconHelp,
} from '@tabler/icons-vue';

type Children = {
  label: string;
  to: string;
};

export type NavItem = {
  id: string;
  label: string;
  to?: string;
  icon: Component;
  children?: Children[];
};

export const menuItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: IconShareplay,
    children: [
      { label: 'CRM', to: '/admin/' },
      { label: 'Analytics', to: '/admin/analytics' },
    ],
  },

  {
    id: 'reports',
    label: 'Reports',
    icon: IconFileDescription,
    children: [
      { label: 'Sales', to: '/admin/sales' },
      { label: 'Marketing', to: '/admin/marketing' },
      { label: 'Operations', to: '/admin/operations' },
    ],
  },

  {
    id: 'request',
    label: 'Requests',
    icon: IconSend,
    children: [
      { label: 'Buying', to: '/admin/requests/buying' },
      { label: 'Selling', to: '/admin/requests/selling' },
      { label: 'Akoko Sika', to: '/admin/requests/akoko_sika' },
      { label: 'Inputs', to: '/admin/requests/inputs' },
    ],
  },

  {
    id: 'deliveries',
    label: 'Deliveries',
    to: '/deliveries',
    icon: IconTruckDelivery,
  },

  {
    id: 'farms',
    label: 'Farms',
    to: '/farm',
    icon: IconTractor,
  },
  {
    id: 'processing',
    label: 'Processing',
    to: '/processing',
    icon: IconRecycle,
  },

  {
    id: 'storage',
    label: 'Storage',
    to: '/storage',
    icon: IconBuildingWarehouse,
    children: [
      { label: 'Chicken', to: '/storage/chicken' },
      { label: 'Eggs', to: '/storage/eggs' },
      { label: 'Maize', to: '/storage/eggs' },
      { label: 'Soyabeans', to: '/storage/eggs' },
    ],
  },

  {
    id: 'Messaging',
    label: 'Messaging',
    to: '/messaging',
    icon: IconMessage2,
  },

  {
    id: 'services',
    label: 'Services',
    to: '/servicing',
    icon: IconWorld,
  },
  {
    id: 'users',
    label: 'Users',
    to: '/users',
    icon: IconUsers,
  },

  {
    id: 'settings',
    label: 'Settings',
    to: '/settings',
    icon: IconSettings,
  },
  {
    id: 'help',
    label: 'Help center',
    to: '/help',
    icon: IconHelp,
  },
];
