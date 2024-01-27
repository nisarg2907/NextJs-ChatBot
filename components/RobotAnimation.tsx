// components/RobotAnimation.tsx
"use client"
import React from 'react';

interface RobotAnimationProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const RobotAnimation: React.FC<RobotAnimationProps> = ({ size = 'medium', text }) => {
  const getAnimationSize = () => {
    switch (size) {
      case 'small':
        return 'w-16 h-10';
      case 'large':
        return 'w-48 h-48';
      default:
        return 'w-32 h-32';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`rounded-full bg-blue-500 animate-pulse ${getAnimationSize()}`}>
      </div>
      {text && <div className="text-black mt-2 p-2">{text}</div>}
    </div>
  );
};

export default RobotAnimation;
