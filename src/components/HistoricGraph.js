import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

function HistoricGraph({ data, labels }) {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    const createChart = () => {
      if (chartRef.current) {
        const newChart = new Chart(chartRef.current, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: `Week ${labels[0]} - ${labels[labels.length - 1]}`,
                data: data,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
            responsive: true,
            maintainAspectRatio: true,
          },
        });
        setMyChart(newChart);
        return newChart;
      }
    };

    // Destroy the old chart if it exists
    if (myChart) {
      myChart.destroy();
    }

    // Create a new chart
    const newChart = createChart();

    // Cleanup function for component unmount
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [data, labels]); // Re-run effect if data or labels change

  return (
    <div className="w-50">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default HistoricGraph;