import { IconCurrencyDollar, IconLogout2, IconPointFilled, IconSettings, IconUserFilled } from '@tabler/icons-vue';
import type { Component } from "vue"

type Children = {
  icon?: Component,
  label: string,
  to: string,
}

export type UserData = {
  id: number,
  label: string,
  icon: Component,
  children?: Children[],
  color?: string,
  to: string,
}

export const userData: UserData[] = [
  {
    id: 1,
    label: 'Active',
    icon: IconPointFilled,
    to: '',
    children: [
      {
        label: 'Always',
        to: '',
        icon: IconPointFilled,
      },
      {
        label: 'Active',
        to: '',
        icon: IconPointFilled,
      },
      {
        label: 'Busy',
        to: '',
        icon: IconPointFilled,
      },
      {
        label: 'Inactive',
        to: '',
        icon: IconPointFilled,
      },
      {
        label: 'Disabled',
        to: '',
        icon: IconPointFilled,
      },
    ]
  },
  {
    id: 1,
    label: 'Subscription',
    icon: IconCurrencyDollar,
    to: '',
    children: [
      {
        label: 'Plan',
        to: '',
      },
      {
        label: 'Billings',
        to: '',
      },
      {
        label: 'Payment',
        to: '',
      },
      {
        label: 'Statement',
        to: '',
      },
    ]
  },
  {
    id: 3,
    label: 'Profile Details',
    icon: IconUserFilled,
    to: '',
  },
  {
    id: 4,
    label: 'Activity Feeds',
    icon: IconUserFilled,
    to: '',
  },
  {
    id: 5,
    label: 'Account Settings',
    icon: IconSettings,
    to: ''
  },
  {
    id: 6,
    label: 'Logout',
    icon: IconLogout2 ,
    color: 'red',
    to: '',
  }
]
