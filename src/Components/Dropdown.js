import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ showDropdown }) => {
  return (
    <div className="relative">
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link to='/companies' className="block px-4 py-2 text-m text-black hover:bg-gray-100 no-underline" role="menuitem">Companies</Link>
            <hr className="my-0 border-black" />
            <Link to='/statistics' className="block px-4 py-2 text-m text-black hover:bg-gray-100 no-underline" role="menuitem">Statistics</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
