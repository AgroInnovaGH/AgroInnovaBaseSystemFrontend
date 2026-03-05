<script setup lang="ts">
import { Bar } from 'vue-chartjs';

import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const months = [
  'January',
  'Febrauary',
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
const year = ['2025', '2026', '2027'];

const weekly = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const chartData = {
  labels: weekly,
  datasets: [
    {
      label: `Sales `,
      backgroundColor: ['red', 'blue', 'green', 'yellow', 'violet', 'pink'],
      data: [30, 20, 50, 60, 70, 80, 90],
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  usePointStyle: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Daily Sales' },
  },
};
</script>
<template>
  <div style="height: 400px; width: 100%">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
