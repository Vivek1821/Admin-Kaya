// AdminPanel.js
import React, { useState } from "react";
import Card from "./Cards";
const AddImmigration = ({ addNewCard }) => {
  const [newCard, setNewCard] = useState({
    title: "",
    image: "",
    details: ["", ""],
    path: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard((prevCard) => ({
      ...prevCard,
      [name]: value,
    }));
  };

  const handleDetailsChange = (index, value) => {
    setNewCard((prevCard) => {
      const newDetails = [...prevCard.details];
      newDetails[index] = value;
      return {
        ...prevCard,
        details: newDetails,
      };
    });
  };

  const handleAddCard = () => {
    if (newCard.title && newCard.image && newCard.path) {
      addNewCard(newCard);
      setNewCard({
        title: "",
        image: "",
        details: ["", ""],
        path: "",
      });
    } else {
      alert("Please fill in all the required fields");
    }
  };

  return (
    <div className="">
      <div className=" p-6 bg-gray-100 rounded-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Add Immigration</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={newCard.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image URL:
          </label>
          <input
            type="text"
            name="image"
            value={newCard.image}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Details:
          </label>
          <input
            type="text"
            value={newCard.details[0]}
            onChange={(e) => handleDetailsChange(0, e.target.value)}
            className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            value={newCard.details[1]}
            onChange={(e) => handleDetailsChange(1, e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Path:
          </label>
          <input
            type="text"
            name="path"
            value={newCard.path}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          onClick={handleAddCard}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Add Card
        </button>

        {newCard.title && (
          <Card
            title={newCard.title}
            image={newCard.image}
            details={newCard.details}
            path={newCard.path}
          />
        )}
      </div>
    </div>
  );
};

export default AddImmigration;
