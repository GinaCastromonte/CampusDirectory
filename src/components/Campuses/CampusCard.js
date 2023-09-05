import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa"; // Import the trash icon from a library like react-icons

const CampusCard = ({ name, image, id, handleRemoveCampus }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyles = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s",
    ...(isHovered && {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    }),
  };

  const imageStyles = {
    width: "100%",
    height: "300px",
    objectPosition: "top",
    objectFit: "cover",
    transition: "filter 0.3s",
    ...(isHovered && {
      filter: "brightness(0.7)",
    }),
  };

  const buttonStyles = {
    position: "absolute",
    top: "2px",
    right: "2px",
  };

  return (
    <Link to={`/campuses/${id}`}>
      <div
        className="my-1 mb-4 px-1  w-[300px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <article style={cardStyles}>
          <div style={imageStyles}>
            <img
              alt="Placeholder"
              className="block h-[200px] w-full text-center object-cover"
              src={image}
              style={imageStyles}
            />
            {isHovered && (
              <button
                className="absolute top-2 right-2 z-20 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveCampus(id);
                }}
                style={buttonStyles} // Apply the buttonStyles here
              >
                <FaTrash />
              </button>
            )}
          </div>
          <div className="mx-2 my-2 text-[24px]">{name}</div>
        </article>
      </div>
    </Link>
  );
};

export default CampusCard;
