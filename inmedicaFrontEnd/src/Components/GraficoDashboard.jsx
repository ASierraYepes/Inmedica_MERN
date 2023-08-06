import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sept', 'Oct', 'Nov', 'Dic'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Resultados',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2000 })),
      backgroundColor: 'rgb(184, 28, 9, 0.6)',
    },
  ],
};

export default function GraficoDashboard() {
  return <Bar options={options} data={data} />;
}