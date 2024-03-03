import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateImmigrationData = () => {
  const [data, setData] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [editing, setEditing] = useState(false);
  const [updatedTitles, setUpdatedTitles] = useState("");
  const [updatedDetails, setUpdatedDetails] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration"
        );
        setData(response.data);
        setSelectedPoint(response.data[0]); // Select the first item by default
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePointClick = (point) => {
    setSelectedPoint(point);
    setEditing(false);
  };

  const handleEditClick = () => {
    setEditing(true);
    setUpdatedTitles(selectedPoint.titles);
    setUpdatedDetails(selectedPoint.details);
  };

  const handleSaveClick = async () => {
    try {
      // Perform the update logic using an API call
      const response = await axios.put(
        `https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration/${selectedPoint.id}`,
        {
          titles: updatedTitles,
          details: updatedDetails,
        }
      );

      console.log("Data updated successfully:", response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Immigration Data</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Points</h2>
          <ul className="list-disc pl-4">
            {data.map((point) => (
              <li
                key={point.id}
                onClick={() => handlePointClick(point)}
                className={`cursor-pointer ${
                  selectedPoint && selectedPoint.id === point.id
                    ? "text-blue-500"
                    : "text-black"
                }`}
              >
                {point.titles}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          {selectedPoint && (
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-2">
                {selectedPoint.titles}
              </h3>
              <p>{selectedPoint.details}</p>
            </div>
          )}
        </div>
      </div>
      {selectedPoint && (
        <>
          {!editing && (
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue mt-4"
            >
              Edit
            </button>
          )}
          {editing && (
            <div className="mt-4">
              <label>Title:</label>
              <input
                type="text"
                value={updatedTitles}
                onChange={(e) => setUpdatedTitles(e.target.value)}
                className="block w-full bg-white border border-gray-300 p-2 rounded-md mt-1"
              />
              <label>Details:</label>
              <textarea
                value={updatedDetails}
                onChange={(e) => setUpdatedDetails(e.target.value)}
                className="block w-full bg-white border border-gray-300 p-2 rounded-md mt-1"
              ></textarea>
            </div>
          )}
          {editing && (
            <button
              onClick={handleSaveClick}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-green mt-4"
            >
              Save
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default UpdateImmigrationData;
