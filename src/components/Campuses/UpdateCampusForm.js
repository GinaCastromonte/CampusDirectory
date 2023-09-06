import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCampus } from "../../store/campusSlice";

const UpdateCampusForm = ({ campus }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(campus.name);
  const [address, setAddress] = useState(campus.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make AJAX request to update the campus
    dispatch(updateCampus({ id: campus.id, name, address }));

    // Reset the form fields
    setName("");
    setAddress("");
  };

  return (
    <div className="mt-8 bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Update Campus</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCampusForm;
