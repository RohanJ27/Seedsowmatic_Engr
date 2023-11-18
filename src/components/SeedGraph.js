import { auth, db } from '../firebase';
import React, { useEffect, useRef, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Chart } from 'chart.js/auto';


function SeedGraph() {
  const chartRef = useRef(null);
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const firebaseConfig = {
        apiKey: "AIzaSyDPi5DAFZO-YX6EsmeeS9JGuW3cYG8E77o",
        authDomain: "seedsowmatic.firebaseapp.com",
        projectId: "seedsowmatic",
        storageBucket: "seedsowmatic.appspot.com",
        messagingSenderId: "1053929503955",
        appId: "1:1053929503955:web:8437b2dc80a76e53eca826",
        measurementId: "G-XJHJ0LJ6YG"
      };

      const seedsCollection = collection(db, "seeds");

      try {
        const snapshot = await seedsCollection.get();
        const data = snapshot.docs.map((doc) => doc.data());

        const startTimes = [];
        const seedData = [];

        data.forEach((entry) => {
          const times = entry.times;
          const seeds = entry.seeds;
          times.forEach((time, index) => {
            startTimes.push(new Date(time).toLocaleString());
            seedData.push(seeds[index]);
          });
        });

        const ctx = chartRef.current.getContext("2d");
        const newChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: startTimes,
            datasets: [{
              label: 'Seeds Planted Over Time',
              data: seedData,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                title: {
                  display: true,
                  text: 'Start Times'
                }
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Seeds Planted'
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: 'Seeds Planted Over Time'
              }
            }
          }
        });

        setMyChart(newChart);

        return () => {
          newChart.destroy();
        };
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-75">
      <canvas ref={chartRef} className=""></canvas>
    </div>
  );
}

export default SeedGraph;
