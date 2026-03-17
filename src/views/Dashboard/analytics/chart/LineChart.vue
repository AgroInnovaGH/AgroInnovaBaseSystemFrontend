<script setup lang="ts">
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
// import * as chartConfig from './chartConfig.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const data = {
    labels: ['JAN/22', 'FEB/22', 'MAR/22', 'APR/22', 'MAY/22', 'JUN/22', 'JUL/22'],
  datasets: [
    {
      label: 'USSD',
      backgroundColor: '#7eec7e',
      data: [25, 60, 20, 90, 45, 100, 55],
      tension: 0.5,
      borderDash: [5, 5],
      borderColor: '#7eec7e',
      pointRadius: 0,
      pointHoverBackgroundColor: '#7eec7e',
      fill: true,
    },
    {
      label: 'Ecommerce',
      backgroundColor: '#89c0f3',
      data: [20, 45, 10, 75, 35, 80, 40],
      tension: 0.5,
      borderDash: [5, 5],
      borderColor: '#89c0f3',
      pointRadius: 0,
      pointHoverBackgroundColor: '#89c0f3',
      fill: true
    },
    {
      label: 'Walk In',
      backgroundColor: 'red',
      data: [30, 40, 15, 70, 30, 85, 45],
      tension: 0.5,
      borderDash: [5, 5],
      borderColor: 'red',
      pointRadius: 0,
      fill: true
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      border: { display: false, },
      grid: { display: false } ,
    },
    y: {
      border: {
        display: false,
        dash: [5, 5]
       },
      grid: {
        display: true,
        color: '#dad7d7b9'
      },
    }
  },
  interaction: {
    mode: 'index',
    intersect: false
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
    }
  }
}
</script>

<template>
  <div class="chart-container">
    <Line class=" max-w-[99%]"
      :data="data"
      :options="options"
    />
  </div>
</template>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
  width: 100%;
}

</style>
