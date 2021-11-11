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
    labels: ["mon", "tue", "wed", "thu", "fri"],
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
  min={1}
  max={10}
  step={1}
  value={value}
  on_change={({ value }) => setvalue(value)}
/>
    <Line data={data} options={options} />
  </div>
};



export default SomethingLineChart;