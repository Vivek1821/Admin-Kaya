import React from "react";

const Card = ({ title, number, gradientClass }) => {
  return (
    <div className={`rounded-lg shadow-md p-6 m-4 w-48 h-48 ${gradientClass}`}>
      <div className="text-xl font-bold mb-4">{title}</div>
      <div className="text-4xl font-bold self-center">{number}</div>
    </div>
  );
};

const CardContainer = () => {
  return (
    <div className="flex justify-center">
      <Card
        title="Users"
        number={1500}
        gradientClass="bg-gradient-to-r from-purple-400 to-pink-500"
      />
      <Card
        title="Revenue"
        number="$250K"
        gradientClass="bg-gradient-to-r from-blue-400 to-cyan-800"
      />
      <Card
        title="Orders"
        number={200}
        gradientClass="bg-gradient-to-r from-green-400 to-teal-500"
      />
    </div>
  );
};

export default CardContainer;
