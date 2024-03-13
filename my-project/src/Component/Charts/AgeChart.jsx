import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";

export const AgeGroupChart = () => {
  const [ageData, setAgeData] = useState([]);
  const [colorScale, setColorScale] = useState([
    "gold",
    "red",
    "navy",
    "tomato",
    "orange",
  ]);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      try {
        const response = await fetch(
          "https://65e40f7388c4088649f63c58.mockapi.io/kayaadmin/users"
        );
        const data = await response.json();

        // Count occurrences of each age group
        const ageGroups = {
          "18-30": 0,
          "31-45": 0,
          "46-60": 0,
          "61-100": 0,
        };

        data.forEach((item) => {
          const age = parseInt(item.age);
          if (age >= 18 && age <= 30) {
            ageGroups["18-30"]++;
          } else if (age >= 31 && age <= 45) {
            ageGroups["31-45"]++;
          } else if (age >= 46 && age <= 60) {
            ageGroups["46-60"]++;
          } else {
            ageGroups["61"]++;
          }
        });

        // Convert ageGroups object to an array of objects with x and y properties
        const extractedData = Object.entries(ageGroups).map(
          ([group, count]) => ({
            x: group,
            y: count,
          })
        );

        setAgeData(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndProcess();
  }, []);

  return (
    <div className="chart-container w-60 border-[1px] border-black rounded-xl">
      <div className=" p-2">Age Group</div>
      <div className="chart">
        <VictoryPie
          colorScale={colorScale}
          data={ageData}
          style={{ width: "300px", height: "300px" }}
        />
        <div className="">
          {ageData.map((item, index) => (
            <div key={index} className="flex ml-2 gap-2">
              <div
                className="legend-color w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: colorScale[index] }}
              ></div>
              <span className="text-sm">{item.x}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
