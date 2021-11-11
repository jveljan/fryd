import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import Slider from "@dnb/eufemia/components/Slider";


const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const MyChart = () => {
  const [value, setvalue] = useState(7);
  
  const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri'],
    datasets: [
      {
        label: 'Interest rate forecast',
        data: [Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value)],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return <>

  <Slider
  min={0}
  max={12}
  value={value}
  on_change={({ value }) => setvalue(value)}// console.log('on_change:', valueasdf)}
/>
    <Bar data={data} options={options} />
  </>
  
};



export default MyChart;