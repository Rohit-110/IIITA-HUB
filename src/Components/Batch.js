import React from 'react';
import Card from '../Components/Card';

const Batch = ({ batch }) => {
  // Array of names
  const names = ["Jai Khanna", "Rohit Pandey", "Nitu Sherawat", "Aditi Gupta", "Jai Khanna", "Rohit Pandey", "Nitu Sherawat", "Aditi Gupta",  "Jai Khanna", "Rohit Pandey", "Nitu Sherawat", "Aditi Gupta"];

  return (
    <div className="bg-white p-2 rounded-lg mb-6 overflow-hidden justify-center items-center ">
      <h3 className="mt-2 text-2xl font-bold mb-4 text-gray-800">Alumni</h3>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {names.map((name, index) => (
          <Card key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Batch;
