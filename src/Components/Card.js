import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ name }) => {
  const profilePath = `/alumProfile/${name}`;
  return (
    <Link to={profilePath}>
      <div className="cursor-pointer card bg-white rounded-lg shadow-md mx-2" style={{ width: "150px", flex: "0 0 auto" }}>
        <img src="https://archive.org/download/twitter-default-pfp/e.png" className="card-img-top w-full h-40 object-cover" alt="Profile" />
        <div className="card-body p-2">
          <p className="card-text text-center text-gray-800 font-semibold">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

