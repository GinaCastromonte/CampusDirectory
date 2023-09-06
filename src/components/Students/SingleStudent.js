import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchStudentById } from "../../store/studentSlice";
import UpdateStudentForm from "./UpdateStudentForm";

const SingleStudent = () => {
  const dispatch = useDispatch();
  const { studentId } = useParams();
  const student = useSelector((state) => state.studentSlice.selectedStudent);

  useEffect(() => {
    dispatch(fetchStudentById(studentId));
  }, [dispatch, studentId]);

  if (!student) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto py-8 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-1/2">
        <img
          src={student.imageUrl}
          alt={student.firstName}
          className="w-full rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold">{`${student.firstName} ${student.lastName}`}</h2>
        <p className="mt-2">Email: {student.email}</p>
        <p>GPA: {student.gpa}</p>
        {student.Campus ? (
          <p>
            Campus:{" "}
            <Link
              to={`/campuses/${student.Campus.id}`}
              className="text-blue-500 hover:underline"
            >
              {student.Campus.name}
            </Link>
          </p>
        ) : (
          <p>No campus assigned</p>
        )}
        <UpdateStudentForm student={student} />
      </div>
    </div>
  );
};

export default SingleStudent;
