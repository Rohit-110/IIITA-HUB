import React from 'react'
import Card from '../Components/Card'
export default function Batch({ batchyear }) {
  return (
    <div className=''>
      <h3 style={{ textAlign: "left", "margin": "10px" }}>Batch {batchyear}</h3>
      <div className="card-container flex p-1 overflow-x-auto" style={{"scrollbarWidth":"none"}}>
        <Card name="Jai Khanna" />
        <Card name="Rohit Pandey" />
        <Card name="Nitu Sherawat" />
        <Card name="Aditi Gupta" />
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
  )
}
