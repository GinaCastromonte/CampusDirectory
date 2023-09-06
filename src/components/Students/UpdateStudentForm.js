import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStudent } from "../../store/studentSlice";

const UpdateStudentForm = ({ student }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(student.firstName);
  const [lastName, setLastName] = useState(student.lastName);
  const [email, setEmail] = useState(student.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = {
      id: student.id,
      firstName,
      lastName,
      email,
    };
    dispatch(updateStudent(updatedStudent));
  };

  return (
    <div className="mt-8 bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Update Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default UpdateStudentForm;
