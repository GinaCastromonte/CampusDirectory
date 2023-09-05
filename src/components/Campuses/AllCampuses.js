import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCampuses, removeCampus } from "../../store/campusSlice.js";
import AddCampusForm from "./AddCampusForm.js";
import CampusCard from "./CampusCard.js";

const AllCampuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector((state) => state.campusSlice.campuses);
  const [addCampus, setAddCampus] = useState(false);

  useEffect(() => {
    dispatch(fetchCampuses());
  }, [dispatch]);

  const handleRemoveCampus = (campusId) => {
    dispatch(removeCampus(campusId));
  };
  const handleAddCampus = () => {
    setAddCampus(!addCampus);
  };
  if (campuses.length === 0) {
    return (
      <>
        <h2>All Campuses</h2>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <div id="all-campuses">
      <div>
        <div className={`relative right-4 flex items-end justify-end`}>
          <div>
            <button
              className="py-2 px-4 my-2 rounded-md w-40 cursor-pointer bg-blue-500 text-white text-center"
              onClick={handleAddCampus}
            >
              + Add Campus
            </button>
          </div>
          {addCampus && <AddCampusForm handleAddCampus={handleAddCampus} />}
        </div>
      </div>

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap justify-around mx-1 lg:-mx-4">
          {campuses.map((singleCampus, i) => (
            <CampusCard
              key={singleCampus.id}
              id={singleCampus.id}
              name={singleCampus.name}
              image={singleCampus.imageUrl}
              handleRemoveCampus={() => handleRemoveCampus(singleCampus.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCampuses;
