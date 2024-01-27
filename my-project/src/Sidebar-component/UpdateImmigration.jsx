import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateImmigrationData = ({ data, onUpdate }) => {
  const [selectedPoint, setSelectedPoint] = useState(1); // Default to the first point
  const [editing, setEditing] = useState(true);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedSubpoints, setUpdatedSubpoints] = useState(["", ""]);
  const [familyData, setFamilyData] = useState(null);

  useEffect(() => {
    // Fetch family data from the API based on the selected point
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/family/${selectedPoint}`);
        setFamilyData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedPoint]);

  const handlePointClick = (pointId) => {
    setSelectedPoint(pointId);
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedTitle(familyData.title);
    setUpdatedSubpoints([...familyData.subpoints]);
  };

  const handleSaveClick = async () => {
    try {
      // Perform the update logic using an API call
      const response = await axios.put(`/api/family/${selectedPoint}`, {
        title: updatedTitle,
        subpoints: updatedSubpoints,
      });

      console.log("Data updated successfully:", response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-red-500">
        Canada and Australia: Convenient Permanent Residency Options for Family
        Immigration 🌍
      </h1>
      <div className="flex items-start w-full">
        <div className="">
          <ul className="list-disc pl-4">
            {/* Assuming you have a data array with family points */}
            {data.map((point) => (
              <li
                key={point.id}
                onClick={() => handlePointClick(point.id)}
                className={`cursor-pointer ${
                  selectedPoint === point.id
                    ? "text-blue-500"
                    : "text-black mr-20"
                }`}
              >
                {point.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 pl-5">
          {familyData && (
            <div className="grid grid-cols-1 gap-3">
              {familyData.subpoints.map((subpoint, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-md shadow-md mb-2"
                >
                  {subpoint}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {editing && (
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />

          <label>Subpoints:</label>
          <input
            type="text"
            value={updatedSubpoints[0]}
            onChange={(e) =>
              setUpdatedSubpoints([e.target.value, updatedSubpoints[1]])
            }
          />
          <input
            type="text"
            value={updatedSubpoints[1]}
            onChange={(e) =>
              setUpdatedSubpoints([updatedSubpoints[0], e.target.value])
            }
          />
        </div>
      )}
      {!editing && (
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mr-4"
        >
          Edit
        </button>
      )}
      {editing && (
        <button
          onClick={handleSaveClick}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green mr-4"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default UpdateImmigrationData;
