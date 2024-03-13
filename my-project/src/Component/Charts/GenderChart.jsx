import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import fetchDataAndProcess from "../FetchData/FetchData";

export const GenderChart = () => {
  const [genderData, setGenderData] = useState([]);
  const [colorScale, setColorScale] = useState([
    "purple",
    "pink",
    "gold",
    "cyan",
    "navy",
  ]);

  useEffect(() => {
    const fetchGenderData = async () => {
      const data = await fetchDataAndProcess(
        "https://65e40f7388c4088649f63c58.mockapi.io/kayaadmin/users",
        "gender"
      );
      setGenderData(data);
    };

    fetchGenderData();
  }, []);

  return (
    <div className="chart-container w-60 border-[1px] border-black rounded-xl">
      <div className="chart-title p-2">Gender</div>
      <div className="chart">
        <VictoryPie
          colorScale={colorScale}
          data={genderData}
          style={{ width: "300px", height: "300px" }}
        />
        <div className="legend">
          {genderData.map((item, index) => (
            <div key={index} className="legend-item flex gap-2 ml-2">
              <div
                className="legend-color w-4 h-4 rounded-full mr-2"
                style={{ backgroundColor: colorScale[index] }}
              ></div>
              <span className="ml-2 text-sm">{item.x}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};