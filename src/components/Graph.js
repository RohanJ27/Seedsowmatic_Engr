import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

function Graph({isPlanting, setIsPlanting, defaultData, defaultLabels, setData, setLabels}) {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);
  let seedTracker = 0;

  useEffect(() => {
    if (chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: defaultLabels != null ? defaultLabels : ['Start'],
          datasets: [{
            label: 'Seeds',
            responsive: true,
            data: defaultData != null ? defaultData : [0],
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

  let sendData = async () => {
    try {
        const response = await fetch('http://localhost:5000/update-db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data: myChart.data.datasets.data,
                labels: myChart.data.labels
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.text();
        console.log('Server response:', data);
    } catch (error) {
        console.error('There was an error!', error);
    }
  }

  let pollSeed = async () => {
    const response = await fetch('http://localhost:5000/get-seed')
    const data = await response.json();

    console.log(data)
    
    if (data.length > seedTracker) {
      addData();
    }
  }

  useEffect(() => {
    if (isPlanting) {
      const interval = setInterval(() => {
        pollSeed();
        //addData();
      }, 4000);
      return () => clearInterval(interval);
    }
      

  }, [isPlanting])

  function addData() {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString(); // Formats the time as HH:MM:SS based on the user's locale

    const newData = seedTracker + 1; // Example data, can be replaced with any value
    seedTracker += 1


    myChart.data.labels.push(formattedTime);
    myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(newData);
    });

    setData(myChart.data.datasets[0].data);
    setLabels(myChart.data.labels);

    myChart.update();
}

  return (
    <div className="App w-50">
      <canvas ref={chartRef} className=""></canvas>
    </div>
  );
}

export default Graph;