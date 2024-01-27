import React, { useState } from "react";

const AdminServiceEditor = ({ services, updateService }) => {
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [updatedService, setUpdatedService] = useState({
    title: "",
    subpoints: [],
  });

  const handleServiceChange = (event) => {
    const selectedId = parseInt(event.target.value);
    setSelectedServiceId(selectedId);

    // Retrieve the selected service details
    const selectedService = services?.find(
      (service) => service.id === selectedId
    );

    // Set the initial state of the updated service
    setUpdatedService({
      title: selectedService ? selectedService.title : "",
      subpoints: selectedService ? [...selectedService.subpoints] : [],
    });
  };

  const handleInputChange = (index, value) => {
    const updatedSubpoints = [...updatedService.subpoints];
    updatedSubpoints[index] = value;

    setUpdatedService({
      ...updatedService,
      subpoints: updatedSubpoints,
    });
  };

  const handleUpdateService = () => {
    if (selectedServiceId !== null) {
      // Update the service with the new data
      updateService(selectedServiceId, updatedService);

      // Reset the selected service and updated data
      setSelectedServiceId(null);
      setUpdatedService({
        title: "",
        subpoints: [],
      });
    }
  };

  return (
    <div className="container ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Service Data Update
      </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Select Service:
        </label>
        <select
          value={selectedServiceId || ""}
          onChange={handleServiceChange}
          className="mt-1 p-2 border border-gray-300 rounded-md w-48 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" disabled>
            Select a service
          </option>
          {services?.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
      </div>
      {selectedServiceId !== null && (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Service Title:
            </label>
            <input
              type="text"
              value={updatedService.title}
              onChange={(e) =>
                setUpdatedService({ ...updatedService, title: e.target.value })
              }
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Subpoints:
            </label>
            {updatedService.subpoints?.map((subpoint, index) => (
              <input
                key={index}
                type="text"
                value={subpoint}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full mb-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            ))}
            <button
              onClick={() =>
                setUpdatedService({
                  ...updatedService,
                  subpoints: [...updatedService.subpoints, ""],
                })
              }
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Add Subpoint
            </button>
          </div>
          <button
            onClick={handleUpdateService}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none"
          >
            Update Service
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminServiceEditor;
