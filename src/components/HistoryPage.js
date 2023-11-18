import React, { useEffect, useState } from "react";
import Header from './Header';
import About from './About';
import HistoricGraph from './HistoricGraph';
import SeedGraph from './SeedGraph';
import Graph from './Graph';
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function HistoryPage() {
  const [dailyData, setDailyData] = useState([]);
  const [dailyLabels, setDailyLabels] = useState([]);
  const [chartKey, setChartKey] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      let month = currentDate.getMonth() + 1; // getMonth() is zero-based
      let day = currentDate.getDate();
      let year = currentDate.getFullYear().toString();
      year = year.slice(-2);

      const docRef = doc(db, "seeds", `${month}-${day}-${year}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data: ", docSnap.data());
        setDailyData(docSnap.data().seeds);

        const formattedLabels = docSnap.data().times.map((timestamp) => {
          // Convert Unix timestamp to Date object
          const date = new Date(timestamp * 1000); // Multiply by 1000 because Date() requires milliseconds
          // Format the time
          return date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          });
        });

        setDailyLabels(formattedLabels);
        setChartKey((prevKey) => prevKey + 1);
      } else {
        console.log("No document");
      }
    };
    fetchData();
  }, []);

  console.log(dailyData);
  console.log(dailyLabels);

  return (
    <div>
      <Header />
      <h1 className="m-5">Historic Data</h1>

      <div className="d-flex flex-column gap-5">
        <div className="d-flex justify-content-center align-items-center gap-5">
          <h3>Weekly Summary</h3>
          <HistoricGraph />
        </div>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <h3>Daily Summary</h3>
          <Graph
            key={chartKey}
            defaultData={
              dailyData.length > 0
                ? dailyData
                : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            }
            defaultLabels={
              dailyLabels.length > 0
                ? dailyLabels
                : [
                    "Start",
                    "9:43:18AM",
                    "9:43:38AM",
                    "9:44:18AM",
                    "9:44:38AM",
                    "9:45:18AM",
                    "9:45:38AM",
                    "9:46:18AM",
                    "9:46:38AM",
                  ]
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
