"use client"
import React from 'react';

const RobotAnimation: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
  <div className="rounded-full w-8 h-8 bg-gray-600 animate-pulse m-2"></div>
  <div className="rounded-tr rounded-bl w-8 h-8 bg-gray-400 animate-spin m-2"></div>
  <div className="rounded-tl rounded-br w-8 h-8 bg-gray-800 animate-ping m-2"></div>
</div>

  );
};

export default RobotAnimation;
