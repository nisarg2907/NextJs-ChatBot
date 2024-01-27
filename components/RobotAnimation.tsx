"use client"
import React from 'react';

const RobotAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-full w-16 h-16 bg-blue-500 animate-pulse">

      </div>
      <div className="text-black"> 
        Searching...
        </div>
    </div>
  );
};

export default RobotAnimation;

