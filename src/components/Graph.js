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
          labels: ['Start'],
          datasets: [{
            label: 'Seeds',
            responsive: true,
            data: [0],
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
    <div className="App w-50">
      <canvas ref={chartRef} className=""></canvas>
      <button onClick={addData}>Add Data</button>
    </div>
  );
}

export default Graph;