import React, { useState } from "react";
import AdminServiceEditor from "../Component/UpdateService";

const Services = () => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    icon: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddService = () => {
    // Validate if all fields are filled
    if (formData.title && formData.details && formData.icon) {
      const newService = {
        title: formData.title,
        details: formData.details,
        icon: formData.icon,
      };

      // Update the services array (assuming it is stored in the parent component)
      updateServices([...services, newService]);

      // Clear the form data after adding the service
      setFormData({
        title: "",
        details: "",
        icon: "",
      });
    } else {
      alert("Please fill in all fields before adding a new service.");
    }
  };

  return (
    <div className="text-black flex  m-5 gap-10  ">
      <div className="w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Service</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Service Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Service Details:
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Service Icon:
          </label>
          <input
            type="text"
            name="icon"
            value={formData.icon}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          onClick={handleAddService}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Service
        </button>
      </div>
      <div className="w-1/2">
        <AdminServiceEditor />
      </div>
    </div>
  );
};

export default Services;
