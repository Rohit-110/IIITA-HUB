import React from 'react'
import Navbar from '../Components/Navbar'
import Batch from '../Components/Batch';
export default function Home() {
  return (
      <div className='main'>
          <Navbar />
          <div className="py-16 m-1">
            <Batch batchyear="2026"/>
            <Batch batchyear="2025"/>
            <Batch batchyear="2024"/>
          </div>
      </div>
  );
}