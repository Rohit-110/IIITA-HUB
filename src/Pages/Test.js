import React, { useState } from 'react';

export default function Test() {
  const [color, setColor] = useState('grey');

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className={`bg-${color}-500 min-h-screen flex justify-center items-center`}>
      <div className="bg-white space-x-4 p-4 rounded-xl">
        <button className="bg-green-500 px-4 py-2 rounded-lg font-bold border border-black" onClick={() => changeColor("green")}>Green</button>
        <button className="bg-blue-500 px-4 py-2 rounded-lg font-bold border border-black" onClick={() => changeColor("blue")}>Blue</button>
        <button className="bg-yellow-500 px-4 py-2 rounded-lg font-bold border border-black" onClick={() => changeColor("yellow")}>Yellow</button>
        <button className="bg-red-500 px-4 py-2 rounded-lg font-bold border border-black" onClick={() => changeColor("red")}>Red</button>
      </div>
    </div>
  );
}
