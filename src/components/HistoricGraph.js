import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';


function HistoricGraph() {


const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    if (chartRef.current) {

      const myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['11/3', '11/4', '11/5', '11/6', '11/7', '11/8', '11/9', '11/10'],
          datasets: [{
            label: 'Week 11/3 - 11/10',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1}]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setMyChart(myChart);


      // Optional: Cleanup function in case of component unmounting
      return () => {
        myChart.destroy();
      };
    }
  }, []);


    return(
        <div className="w-50">
            <canvas ref={chartRef} className=""></canvas>
      </div>
    );
}

export default HistoricGraph;