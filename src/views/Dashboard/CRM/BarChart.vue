<script setup lang="ts">
import { computed } from 'vue';
import { Chart } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from 'chart.js';
import { useComponentsState } from '@/stores/components_state';
import { storeToRefs } from 'pinia';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
);

const store = useComponentsState();
const { selectedFilter } = storeToRefs(store);
const monthly = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekly = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
const annual = ['2026', '2027', '2028', '2029', '2030'];

const weeklyData = [50, 75, 40, 47, 68, 120, 95];
const annualData = [50, 75, 40, 47, 68, 120, 95];
const monthlyData = [50, 75, 40, 47, 68, 120, 95, 89, 90, 102, 200, 150];

const weeklySales = [75, 95, 60, 67, 88, 150, 195];
const annualSales = [75, 95, 60, 67, 88, 150, 195];
const monthlySales = [90, 105, 80, 87, 108, 150, 105, 189, 140, 190, 250, 200];

function getData() {
  return selectedFilter.value == 'monthly'
    ? monthlyData
    : selectedFilter.value == 'weekly'
      ? weeklyData
      : annualData;
}
function getSalesTarget() {
  return selectedFilter.value == 'monthly'
    ? monthlySales
    : selectedFilter.value == 'weekly'
      ? weeklySales
      : annualSales;
}

const thickness = 20;
const radius = 10;

const chartData = computed(() => ({
  labels:
    selectedFilter.value === 'weekly'
      ? weekly
      : selectedFilter.value == 'monthly'
        ? monthly
        : annual,
  datasets: [
    {
      type: 'bar' as const,
      label: 'Sales',
      backgroundColor: '#4CAF50',
      data: getData(),
      borderWidth: 1,
      barThickness: thickness,
      borderRadius: radius,
      borderSkipped: true,
    },
    {
      type: 'bar' as const,
      label: 'Target',
      data: getSalesTarget(),
      borderWidth: 1,
      barThickness: thickness,
      borderRadius: radius,
    },

    {
      type: 'line' as const,
      label: 'Line Chart Sales',
      data: getData(),
      backgroundColor: 'lightgray',
      tension: 0.5,
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      yAxisID: 'y1',
    },
  ],
}));

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: `${selectedFilter.value === 'weekly' ? 'Weekly' : 'Monthly'} Sales & Target`,
    },
  },

  scales: {
    y: {
      grid: { display: false },

      ticks: {
        callback: (value: string | number) => value + 'k',
      },
    },
    y1: {
      //the values for the line chart
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: { display: false },
      title: {
        display: true,
        text: 'Caliberations for line chart',
      },

      ticks: {
        callback: (value: string | number) => value + 'k',
      },
    },
    x: {
      grid: {
        display: false, // clean look (optional)
      },
    },
  },
}));
</script>
<template>
  <div style="height: 500px; width: 100%" class="bg-white px-6 rounded-(--radius) chart_wrapper">
    <Chart type="bar" class="max-w-[99%]" :data="chartData" :options="chartOptions" />
  </div>
</template>
