import React from 'react';
import { Line } from 'react-chartjs-2';
import Slider from "@dnb/eufemia/components/Slider";


const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Interest rate',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const MyChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

<Slider
  min={0}
  max={100}
  value={70}
  label="Default Slider:"
  on_change={({ value }) => console.log('on_change:', value)}
/>

export default MyChart;