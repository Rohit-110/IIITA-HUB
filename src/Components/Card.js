import React from 'react'

export default function Card({ name }) {
  return (
    <div className="card mx-2" style={{ width: "150px","flex": "0 0 auto"}}>
      <img src="https://archive.org/download/twitter-default-pfp/e.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{name}</p>
      </div>
    </div>
  );
}
