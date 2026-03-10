import { IconSettings } from "@tabler/icons-vue"
import { IconCalendarEvent, IconTrash, IconAt, IconChartDonut4, IconBell } from "@tabler/icons-vue"
import type { Component } from "vue"


export type ChartData = {
  id: number,
  label: string,
  icon: Component,
  to: string
}

export const chartData: ChartData[] = [
  {
    id: 1,
    label: 'New',
    icon: IconAt,
    to: ''
  },
  {
    id: 2,
    label: 'Events',
    icon: IconCalendarEvent,
    to: ''
  },
  {
    id: 3,
    label: 'Snoozed',
    icon: IconBell,
    to: ''
  },
  {
    id: 4,
    label: 'Deleted',
    icon: IconTrash,
    to: ''
  },
  {
    id: 5,
    label: 'Settings',
    icon: IconSettings,
    to: ''
  },
  {
    id: 6,
    label: 'Tips & Tricks',
    icon: IconChartDonut4,
    to: ''
  },
]