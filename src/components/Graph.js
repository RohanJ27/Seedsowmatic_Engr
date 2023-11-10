import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

function Graph() {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          datasets: [{
            label: 'Sales',
            responsive: true,
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            borderWidth: 1,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
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

  function addData(label) {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString(); // Formats the time as HH:MM:SS based on the user's locale

    const newData = Math.floor(Math.random() * 100); // Example data, can be replaced with any value

    myChart.data.labels.push(formattedTime);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });
    myChart.update();
}


  return (
    <div className="App">
      <canvas ref={chartRef} className=""></canvas>
      <button onClick={addData}>Add Data</button>
    </div>
  );
}

export default Graph;