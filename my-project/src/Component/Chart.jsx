import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";
import CardContainer from "./CardContainer";
import AppointmentData from "./AppointmentData";

const Chart = () => {
  const [serviceData, setServiceData] = useState([]);
  const [colorScale, setColorScale] = useState([
    "tomato",
    "orange",
    "gold",
    "cyan",
    "navy",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/services"
        );
        const data = await response.json();
        // Extracting titles and values from the API response
        const extractedData = data.map((item) => ({
          x: item.title,
          y: 30,
        }));
        setServiceData(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-start w-96 gap-2">
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="text-xl font-bold mb-4">User Data</div>
        <div className="flex flex-col">
          <div className="w-72">
            <VictoryPie
              colorScale={colorScale}
              data={serviceData}
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className="ml-8 items-start">
            {serviceData.map((item, index) => (
              <div key={index} className="flex items-center mb-2">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: colorScale[index] }}
                ></div>
                <span>{item.x}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[50vw] gap-4 ">
        <CardContainer />
        <AppointmentData />
      </div>
    </div>
  );
};

export default Chart;
