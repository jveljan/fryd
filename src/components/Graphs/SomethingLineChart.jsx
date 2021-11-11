import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Slider from "@dnb/eufemia/components/Slider";


const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const SomethingLineChart = () => {
  const [value, setvalue] = useState(7);
  
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'exchange rate',
        data: [Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value), Math.floor(Math.random() * value)],
        fill: false,
        backgroundColor: 'rgb(0, 0, 128)',
        borderColor: 'rgba(0, 0, 128 , 0.2)',
      },
    ],
  };

  return <div className="lineGraphContainer">

  <Slider
  min={30}
  max={1200}
  step={100}
  value={value}
  on_change={({ value }) => setvalue(value)}
/>
    <Line data={data} options={options} />
  </div>
};



export default SomethingLineChart;