/* eslint-disable react/prop-types */
function Avatar({ image, firstName, lastName }) {
  return (
    <div className="card">
      <img className="card__img" src={image} alt={`${firstName} ${lastName}`} />
      <p className="card__text">
        {firstName} {lastName}
      </p>
    </div>
  );
}

export default Avatar;
