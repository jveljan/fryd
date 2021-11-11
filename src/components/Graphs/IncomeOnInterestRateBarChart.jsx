import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Slider from "@dnb/eufemia/components/Slider";


const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const IncomeOnInterestRateBarChart = () => {
  const [value, setvalue] = useState(7);
  
  const data = {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri'],
    datasets: [
      {
        label: 'interest rate',
        data: [Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value)],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)'
      },
    ],
  };

  return <div className="barGraphContainer">

<div className="verticalSliderContainer">
  <Slider
  min={10000000}
  max={12000000}
  step={500000}
  vertical="true"
  value={value}
  on_change={({ value }) => setvalue(value)}// console.log('on_change:', valueasdf)}
/>
</div>
    <Bar data={data} options={options} />


  </div>
  
};



export default IncomeOnInterestRateBarChart;