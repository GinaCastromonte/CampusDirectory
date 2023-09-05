import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/studentSlice";
import axios from "axios";

const AddStudentForm = ({ handleAddStudent }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState();
  const defaultImage =
    "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddStudent();
    const newStudent = {
      firstName,
      lastName,
      email,
      imageUrl: image ? image : defaultImage,
    };
    dispatch(addStudent(newStudent));
    // Reset the form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setImage(defaultImage);
  };
  console.log(image);
  const handleImageChange = async (e) => {
    const inputValue = e.target.files[0];
    let formData = new FormData();

    formData.append("image", inputValue);
    await axios.post("/api/upload", formData).then(async (res) => {
      setImage(res?.data?.url);
    });
  };
  return (
    <div id="add-student" className="relative z-20">
      <div
        style={{ background: "#D9D9D9" }}
        className="absolute right-[20%] flex flex-col items-center justify-center rounded-md w-72 p-4 top-[20%] "
      >
        <h2 className="font-bold text-xl">Add Student Here:</h2>
        <form id="add-form" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col my-2 justify-center items-start">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4 w-20 h-20 object-cover ">
            <img
              style={{ height: "unset", cursor: "pointer" }}
              className="w-full"
              src={image ? image : defaultImage}
              alt="pfp"
              onClick={handleImageClick}
            />

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <button
            className="bg-blue-500 text-center my-2 rounded-sm py-2 px-4"
            type="submit"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
