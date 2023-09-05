import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addCampus } from "../../store/campusSlice";
import axios from "axios";

const AddCampusForm = ({ handleAddCampus }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState();
  const defaultImage =
    "https://t4.ftcdn.net/jpg/02/15/84/43/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCampus();
    // Dispatch the addCampus action to update the state
    dispatch(
      addCampus({ name, address, imageUrl: image ? image : defaultImage })
    );

    // Clear the form input fields
    setName("");
    setAddress("");
    setImage(defaultImage);
  };
  const handleImageChange = async (e) => {
    const inputValue = e.target.files[0];
    let formData = new FormData();

    formData.append("image", inputValue);
    await axios.post("/api/upload", formData).then(async (res) => {
      setImage(res?.data?.url);
    });
  };
  return (
    <div id=" add-campus" className="relative z-20">
      <div
        style={{ background: "#D9D9D9" }}
        className="absolute right-[20%] flex flex-col items-center justify-center rounded-md w-72 p-4 top-[20%] "
      >
        <h3 className="font-bold text-xl">Add Campus</h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
            type="submit"
            className="bg-blue-500 text-center my-2 rounded-sm py-2 px-4"
          >
            Add Campus
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCampusForm;
