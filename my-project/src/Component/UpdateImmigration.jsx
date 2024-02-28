import React, { useState, useEffect } from "react";

const UpdateImmigration = () => {
  const [immigrations, setImmigrations] = useState([]);
  const [selectedImmigration, setSelectedImmigration] = useState(null);
  const [formData, setFormData] = useState({
    imageURL: "",
    details: "",
    title: "",
  });
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    // Fetch immigration entries from the API
    const fetchImmigrations = async () => {
      try {
        const response = await fetch(
          "https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration"
        );
        if (response.ok) {
          const data = await response.json();
          setImmigrations(data);
        } else {
          console.error("Failed to fetch immigration entries");
        }
      } catch (error) {
        console.error("Error fetching immigration entries:", error);
      }
    };

    fetchImmigrations();
  }, []);

  const handleImmigrationSelect = async (id) => {
    try {
      const response = await fetch(
        `https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setSelectedImmigration(data);
        setFormData(data); // Pre-fill form fields with selected immigration data
      } else {
        console.error("Failed to fetch immigration details");
      }
    } catch (error) {
      console.error("Error fetching immigration details:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make API call to update form data
      const response = await fetch(
        `https://65dcb4ebe7edadead7ecbc41.mockapi.io/api/immigration/add-immigration/${selectedImmigration.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSubmitMessage("Form updated successfully");
        // Reset form data after successful submission
        setFormData({
          imageURL: "",
          details: "",
          title: "",
        });
      } else {
        setSubmitMessage("Failed to update form");
      }
    } catch (error) {
      console.error("Error updating form:", error);
      setSubmitMessage("An error occurred while updating the form");
    }
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-2">Update Immigration</h2>
      <div className="flex mb-4">
        <select
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-black w-2/5 max-w-md"
          onChange={(e) => handleImmigrationSelect(e.target.value)}
        >
          <option value="">Select an entry</option>
          {immigrations.map((immigration) => (
            <option
              key={immigration.id}
              value={immigration.id}
              className="text-black"
            >
              {immigration.title}
            </option>
          ))}
        </select>
      </div>
      {selectedImmigration && (
        <div className="bg-gray-100 rounded-md p-8">
          <h2 className="text-xl font-semibold mb-4">
            Update Immigration Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="imageURL" className="block text-gray-700">
                Image URL:
              </label>
              <input
                type="text"
                id="imageURL"
                name="imageURL"
                value={formData.imageURL}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="details" className="block text-gray-700">
                Details:
              </label>
              <input
                type="text"
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input mt-1 block w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          </form>
          {submitMessage && (
            <p className="text-green-600 mt-4">{submitMessage}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UpdateImmigration;
