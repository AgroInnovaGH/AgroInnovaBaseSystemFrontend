import { IconMail, IconMailCancel, IconMailCheck, IconMailForward,  IconMailPlus, } from "@tabler/icons-vue"
import type { Component } from "vue"



export type AnalyticsData = {
  id: number,
  label: string,
  subLabel: string,
  icon: Component,
  to: string,
}

export const analyticsData: AnalyticsData[] = [
  {
    id: 1,
    label: '50,545',
    subLabel: 'Received',
    icon: IconMail,
    to: '',
  },
  {
    id: 2,
    label: '25,000',
    subLabel: 'Confirmed',
    icon: IconMailPlus,
    to: '',
  },
  {
    id: 3,
    label: '20,354',
    subLabel: 'Delivered',
    icon: IconMailCheck,
    to: '',
  },
  {
    id: 4,
    label: '2,047',
    subLabel: 'Cancelled',
    icon: IconMailCancel,
    to: '',
  },
  {
    id: 4,
    label: '5,067',
    subLabel: 'Returned',
    icon: IconMailForward,
    to: '',
  },
]
