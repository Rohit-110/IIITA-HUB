import React from 'react';

const ContactCard = ({ image, name, role, number, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-7/8 ">
      <img src={image} className="w-full h-48 object-cover" alt={`${name} profile`} />
      <div className="p-2">
        <h2 className="text-xl mb-2"><b>{name}</b></h2>
        <p className="text-gray-700 mb-2">{role}</p>
        <p className="text-gray-700 mb-2"><b>Phone No. :</b> {number}</p>
        <p className="text-gray-700"><b>Email :</b> {email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
