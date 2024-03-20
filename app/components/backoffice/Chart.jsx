'use client';

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ChartRepresentation() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (ref.current.chart) {
        ref.current.chart.destroy();
      }

      const context = ref.current.getContext('2d');
      const newChart = new Chart(context, {
        type: 'line',
        data: {
          labels: data.map((d) => d.name),
          datasets: [
            {
              label: 'pv of page',
              data: data.map((d) => d.pv),
              backgroundColor: 'red',
              borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
              label: 'uv of page',
              data: data.map((d) => d.uv),
              backgroundColor: 'green',
              borderColor: 'rgba(54, 162, 235, 0.2)',
            },
          ],
        },
        options: {
          layout: {
            padding: 40,
          },
          // responsive: true,
          scales: {
            x: {
              type: 'linear',
            },
            y: {
              beginAtZero: true,
            }
          },
        }
      }
      );
      ref.current.chart = newChart;
    }

    
  }, []);
  return (
    <div style={{position: 'relative', width:'90vw', height:'90vh'}}>
      <canvas ref={ref} />
    </div>
  );
}
