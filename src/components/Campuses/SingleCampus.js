import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCampusById, unregisterStudent } from "../../store/campusSlice";

import UpdateCampusForm from "./UpdateCampusForm";

const SingleCampus = () => {
  const dispatch = useDispatch();
  const { campusId } = useParams();
  const campus = useSelector((state) => state.campusSlice.selectedCampus);

  useEffect(() => {
    dispatch(fetchCampusById(campusId));
  }, [dispatch, campusId]);

  const handleUnregister = (studentId) => {
    dispatch(unregisterStudent({ campusId, studentId }));
  };

  if (!campus) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
        <h2 className="text-2xl font-semibold mb-4">{campus.name}</h2>
        <img
          src={campus.imageUrl}
          alt={campus.name}
          className="w-full rounded-lg mb-4"
        />
        <p className="mb-4">
          <strong>Address:</strong> {campus.address}
        </p>
        <p className="mb-4">
          <strong>Description:</strong> {campus.description}
        </p>
        <UpdateCampusForm campus={campus} />

        <h3 className="text-xl font-semibold mt-8 mb-4">Students</h3>
        {campus.Students.length > 0 ? (
          <ul>
            {campus.Students.map((student) => (
              <li
                key={student.id}
                className="flex items-center justify-between mb-2"
              >
                <Link
                  to={`/students/${student.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {`${student.firstName} ${student.lastName}`}
                </Link>
                <button
                  onClick={() => handleUnregister(student.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Unregister
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No students in this campus</p>
        )}
      </div>
    </div>
  );
};

export default SingleCampus;
