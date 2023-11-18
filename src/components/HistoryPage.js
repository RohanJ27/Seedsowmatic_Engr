import React, { useEffect, useState } from "react";
import Header from "./Header";
import HistoricGraph from "./HistoricGraph";
import Graph from "./Graph";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { Dropdown } from "react-bootstrap";

function HistoryPage() {
  const [dailyData, setDailyData] = useState([]);
  const [dailyLabels, setDailyLabels] = useState([]);
  const [weeklyData, setWeeklyData] = useState();
  const [weeklyLabels, setWeeklyLabels] = useState([]);
  const [chartKey, setChartKey] = useState(0);
  const [currentWeek, setCurrentWeek] = useState("11/12 - 11/18");

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
        setDailyData(docSnap.data().seeds);

        console.log(docSnap.data().times);
        // const formattedLabels = docSnap.data().times.map((timestamp) => {
        //   // Convert Unix timestamp to Date object
        //   const date = new Date(timestamp * 1000); // Multiply by 1000 because Date() requires milliseconds
        //   // Format the time
        //   return date.toLocaleTimeString("en-US", {
        //     hour: "numeric",
        //     minute: "2-digit",
        //     second: "2-digit",
        //     hour12: true,
        //   });
        // });

        setDailyLabels(docSnap.data().times);
        setChartKey((prevKey) => prevKey + 1);
        console.log(dailyLabels);
        console.log(dailyData);
      } else {
        console.log("No document");
      }
    };

    const fetchWeekData = async () => {
      const { weekData, weekLabels } = await fetchWeeklyData(
        new Date(2023, 10, 12),
        new Date(2023, 10, 18)
      );
      if (weekData && weekLabels) {
        setWeeklyData(weekData);
        setWeeklyLabels(weekLabels);
      }
    };

    fetchWeekData();
    fetchData();
  }, []);

  const fetchWeeklyData = async (start, end) => {
    const weekData = [];
    const weekLabels = [];

    // Loop through each day of the week
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      let day = d.getDate();
      let month = d.getMonth() + 1; // getMonth() is zero-based
      let year = d.getFullYear().toString().slice(-2);

      // Format the date to match how it's stored in Firebase
      let formattedDate = `${month}-${day}-${year}`;
      let label = `${month}/${day}`;
      weekLabels.push(label);
      // Fetch data for the day
      const docRef = doc(db, "seeds", formattedDate);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        weekData.push(docSnap.data().seeds[docSnap.data().seeds.length - 1]);
      } else {
        weekData.push(0);
      }
    }
    return { weekData, weekLabels };
  };

  const handleDropdownItemClick = async (item) => {
    let startDate, endDate;

    // Determine the date range based on the clicked item
    switch (item) {
      case "action-1":
        startDate = new Date(2023, 9, 29); // 10/29/2023
        endDate = new Date(2023, 10, 4); // 11/4/2023
        break;
      case "action-2":
        startDate = new Date(2023, 10, 5); // 11/5/2023
        endDate = new Date(2023, 10, 11); // 11/11/2023
        break;
      case "action-3":
        startDate = new Date(2023, 10, 12); // 11/12/2023
        endDate = new Date(2023, 10, 18); // 11/18/2023
        break;
      default:
        break;
    }
    let startMonth = startDate.getMonth() + 1; // getMonth() is zero-based
    let startDay = startDate.getDate();

    let endMonth = endDate.getMonth() + 1; // getMonth() is zero-based
    let endDay = endDate.getDate();

    setCurrentWeek(`${startMonth}/${startDay} - ${endMonth}/${endDay}`);

    const { weekData, weekLabels } = await fetchWeeklyData(startDate, endDate);
    if (weekData && weekLabels) {
      setWeeklyData(weekData);
      setWeeklyLabels(weekLabels);
    }

    // Now you can set your state with this weekly data
  };

  return (
    <div>
      <Header />
      <h1 className="m-5">Historic Data</h1>

      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center gap-5">
            <h3>Weekly Summary</h3>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentWeek}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => handleDropdownItemClick("action-1")}
                >
                  10/29 - 11/4
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-2"
                  onClick={() => handleDropdownItemClick("action-2")}
                >
                  11/5 - 11/11
                </Dropdown.Item>
                <Dropdown.Item
                  href="#/action-3"
                  onClick={() => handleDropdownItemClick("action-3")}
                >
                  11/12 - 11/18
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <HistoricGraph data={weeklyData} labels={weeklyLabels} />
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