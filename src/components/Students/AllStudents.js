import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents, removeStudent } from "../../store/studentSlice";
import AddStudentForm from "./AddStudentForm";
import StudentCard from "./StudentCard";

const AllStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentSlice.students);
  const [addStudent, setAddStudent] = useState(false);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);
  const handleAddStudent = () => {
    setAddStudent(!addStudent);
  };
  const handleRemoveStudent = (studentId) => {
    dispatch(removeStudent(studentId));
  };

  if (students.length === 0) {
    return (
      <>
        <h2>All Students</h2>
        <p>Loading...</p>
      </>
    );
  }
  console.log(students);
  return (
    <div id="all-students">
      <div>
        <div className={`relative right-4 flex items-end justify-end`}>
          <div>
            <button
              className="py-2 px-4 my-2 rounded-md w-40 cursor-pointer bg-blue-500 text-white text-center"
              onClick={handleAddStudent}
            >
              + Add Student
            </button>
          </div>
          {addStudent && <AddStudentForm handleAddStudent={handleAddStudent} />}
        </div>
      </div>

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap justify-around mx-1 lg:-mx-4">
          {students.map((singleStudent, i) => (
            <StudentCard
              key={singleStudent.id}
              id={singleStudent.id}
              name={singleStudent.firstName + " " + singleStudent.lastName}
              image={singleStudent.imageUrl}
              handleRemoveStudent={() => handleRemoveStudent(singleStudent.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
