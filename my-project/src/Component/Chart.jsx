import React from "react";
import { VictoryPie } from "victory";
import CardContainer from "./CardContainer";

const Chart = () => {
  const sampleData = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ];

  const colorScale = ["tomato", "orange", "gold", "cyan", "navy"];

  return (
    <div className="flex justify-start w-full">
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="text-xl font-bold mb-4">User Data</div>
        <div className="flex flex-col">
          <div className="w-72">
            <VictoryPie
              colorScale={colorScale}
              data={sampleData}
              style={{
                width: "",
              }}
            />
          </div>
          <div className="ml-8 items-start">
            {sampleData.map((item, index) => (
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
      <div>
        <CardContainer />
      </div>
    </div>
  );
};

export default Chart;
