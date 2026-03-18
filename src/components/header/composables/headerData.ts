import { IconBuildingWarehouse, IconFileDescription, IconMessage2, IconRecycle, IconSend, IconTractor, IconTruckDelivery, IconUsers, IconWorld } from "@tabler/icons-vue"
import type { Component } from "vue"

type Children = {
  label: string,
  to: string,
}

export type HeaderData =  {
  id: number,
  label: string,
  icon: Component,
  children?: Children[],
  to: string,

}

export const headerData: HeaderData[] = [
  {

    id: 1,
    label: 'Reports',
    icon: IconFileDescription,
    to: '',
    children: [
      {
        label: 'Sales',
        to: '/admin/sales',
      },
      {
        label: 'Marketing',
        to: '/admin/marketing',
      },
      {
        label: 'Operations',
        to: '/admin/operations',
      }
    ]
  },
  {
    id: 2,
    label: 'Request',
    icon: IconSend,
    to: '',
    children: [
      {
        label: 'Buying',
        to: '',
      },
      {
        label: 'Selling',
        to: '',
      },
      {
        label: 'Akoko Sika',
        to: '',
      },
      {
        label: 'Inputs',
        to: '',
      }
    ]
  },
  {
    id: 3,
    label: 'Deliveries',
    icon: IconTruckDelivery,
    to: '',
  },
  {
    id: 4,
    label: 'Farms',
    icon: IconTractor,
    to: '',
  },
  {
    id: 5,
    label: 'Processing',
    icon: IconRecycle,
    to: '',
  },
  {
    id: 6,
    label: 'Storage',
    icon: IconBuildingWarehouse,
    to: '',
    children: [
      {
        label: 'Chicken',
        to: '',
      },
      {
        label: 'Egg',
        to: '',
      },
      {
        label: 'Maize',
        to: '',
      },
      {
        label: 'Soybeans',
        to: '',
      }
    ]
  },
  {
    id: 7,
    label: 'Messages',
    icon: IconMessage2,
    to: '',
  },
  {
    id: 8,
    label: 'Service',
    icon: IconWorld,
    to: '',
  },
  {
    id: 9,
    label: 'Users',
    icon: IconUsers,
    to: '',
  }
]

