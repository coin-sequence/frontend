"use client";

import React from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  lineChartData: ChartData<"line">;

}

export const LineChart = ({lineChartData}:LineChartProps) => {

  const chartOptions: ChartOptions<'line'> = {
    responsive:true,
    maintainAspectRatio:true,
    aspectRatio:1,
    plugins:{
        legend:{
            display:false
        },
      
    },
    scales:{
      x:{
        ticks:{
          color:'white'
        },
        grid:{
          color:'#5B5B5B'
        }
        
      },
      y:{
        ticks:{
          color:'white',
          
        },
        beginAtZero:true,
        grid:{
          color:'#5B5B5B'
        }
      }
    },
    elements:{
      line:{
        tension:0.3
      }
    },
  };

  return <Line data={lineChartData} options={chartOptions} height={'100%'} width={'100%'}/>;
};

