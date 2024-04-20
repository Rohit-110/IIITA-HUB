import React from 'react';

const ContactCard = ({ image, name, role }) => {
    return (
        <div className='bg-white rounded-lg shadow-md overflow-hidden '>
            <img src={image} className='w-full h-56 object-cover' alt={`${name} profile`} />
            <div className='pt-2'>
                <h2 className='text-xl font-bold mb-2'>{name}</h2>
                <p className='text-l'>{role}</p>
            </div>
        </div>
    );
}

export default ContactCard;
