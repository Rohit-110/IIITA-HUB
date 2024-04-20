import React from 'react';
import Card from '../Components/Card';

const Batch = ({ batchyear }) => {
  return (
    <div className="bg-white p-6 rounded-lg mb-6 overflow-hidden">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Batch {batchyear}</h3>
      <div className="flex overflow-x-scroll space-x-4 ">
        <Card name="Jai Khanna" />
        <Card name="Rohit Pandey" />
        <Card name="Nitu Sherawat" />
        <Card name="Aditi Gupta" />
        <Card name="Jai Khanna" />
        <Card name="Rohit Pandey" />
        <Card name="Nitu Sherawat" />
        <Card name="Aditi Gupta" />
      </div>
    </div>
  );
};

export default Batch;
