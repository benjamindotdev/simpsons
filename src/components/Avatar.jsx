/* eslint-disable react/prop-types */
import { useState } from "react";
function Avatar({ image, firstName, lastName, hoverImage }) {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    console.log(hover);
    setHover(!hover);
    console.log(hover);
  };
  return (
    <div className="card" onMouseOver={() => handleHover()}>
      <img
        className="card__img"
        src={hover ? hoverImage : image}
        alt={`${firstName} ${lastName}`}
      />
      <p className="card__text">
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default Avatar;
