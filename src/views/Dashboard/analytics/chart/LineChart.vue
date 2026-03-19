<script setup lang="ts">
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const data = {
  labels: ['JAN/22', 'FEB/22', 'MAR/22', 'APR/22', 'MAY/22', 'JUN/22', 'JUL/22'],
  datasets: [
    {
      label: 'USSD',
      borderColor: '#7eec7e',
      backgroundColor: 'rgba(126, 236, 126, 0.1)',
      data: [25, 60, 20, 90, 45, 100, 55],
      tension: 0.5,
      borderDash: [5, 5],
      pointRadius: 0,
      pointHoverBackgroundColor: '#7eec7e',
      fill: 'origin',
    },
    {
      label: 'Ecommerce',
      borderColor: '#89c0f3',
      backgroundColor: 'rgba(137, 192, 243, 0.2)',
      data: [20, 45, 10, 75, 35, 80, 40],
      tension: 0.5,
      borderDash: [5, 5],
      pointRadius: 0,
      pointHoverBackgroundColor: '#89c0f3',
      fill: 'origin',
    },
    {
      label: 'Walk In',
      borderColor: '#ff6b6b',
      backgroundColor: 'rgba(255, 107, 107, 0.2)',
      data: [30, 40, 15, 70, 30, 85, 45],
      tension: 0.5,
      borderDash: [5, 5],
      pointRadius: 0,
      fill: 'origin',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      border: { display: false },
      grid: { display: false },
    },
    y: {
      border: { display: false, dash: [5, 5] },
      grid: {
        display: true,
        color: '#dad7d7b9',
      },
      beginAtZero: true,
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    tooltip: {
      mode: 'index',
      intersect: false,
      backgroundColor: 'whitesmoke',
      borderColor: '#d9d9d9',
      borderWidth: 2,
      cornerRadius: 20,
      padding: 12,
      titleColor: 'black',
      titleFont: { size: 16, weight: 'bold' },
      bodyColor: 'gray',
      bodyFont: { size: 13, lineHeight: 2 },
      caretSize: 8,
    },

    filler: {
      drawTime: 'beforeDatasetsDraw',
    },
  },
};
</script>

<template>
  <div class="chart-container">
    <Line class="max-w-[99%]" :data="data" :options="options" />
  </div>
</template>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
  width: 100%;
}
</style>
