import React from "react";
import AddImmigration from "./AddImmigration";
import UpdateImmigrationData from "./UpdateImmigration";

const Immigration = () => {
  const data = [
    {
      id: 1,
      title: "Family-Centric Immigration Policies:",
      subpoints: [
        "Both Canada and Australia prioritize family reunification...",
        "These programs enable individuals to sponsor their spouses, children...",
      ],
    },
    {
      id: 2,
      title: "Strong Job Markets",
      subpoints: [
        "Canada and Australia offer robust job markets with diverse employment opportunities.",
        "These countries actively seek skilled professionals to contribute...",
      ],
    },
  ];

  // Dummy handleUpdate function
  const handleUpdate = (updatedData) => {
    console.log("Updated Data:", updatedData);
    // You can perform additional logic or API calls here
  };

  return (
    <div className="text-black">
      <div className="flex">
        <div className="w-1/2">
          <AddImmigration />
        </div>
        <div className="w-1/2">
          {/* <UpdateImmigrationData data={data} onUpdate={handleUpdate} /> */}
        </div>
      </div>
    </div>
  );
};

export default Immigration;
