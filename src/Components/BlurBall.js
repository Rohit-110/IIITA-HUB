import React from 'react';

const BlurBall = () => {
  return (
    <div className="relative overflow-hidden h-96">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 shadow-lg animate-bounce-x"></div>
      </div>
    </div>
  );
};

export default BlurBall;
