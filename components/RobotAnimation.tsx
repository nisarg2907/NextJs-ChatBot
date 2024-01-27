import React, { useState,useEffect } from 'react';

interface RobotAnimationProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const RobotAnimation: React.FC<RobotAnimationProps> = ({ size = 'medium', text }) => {
  const getAnimationSize = () => {
    switch (size) {
      case 'small':
        return 'w-16 h-16';
      case 'large':
        return 'w-48 h-48';
      default:
        return 'w-32 h-32';
    }
  };

  const [lookingRight, setLookingRight] = useState(true); // Track eye direction

  useEffect(() => {
    const interval = setInterval(() => {
      setLookingRight((prev) => !prev); // Toggle eye direction periodically
    }, 2000); // Adjust duration as needed

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative ${getAnimationSize()}`}>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <style jsx>{`
            @keyframes lookRight {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(20%); }
            }

            @keyframes lookLeft {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(-20%); }
            }

            .eye {
              animation: ${lookingRight ? 'lookRight' : 'lookLeft'} 2s infinite;
            }
          `}</style>
          <circle cx="50" cy="50" r="40" fill="#000000" />
          <ellipse
            cx="40"
            cy="45"
            rx="5"
            ry="10"
            fill="#ffffff"
            className="eye"
          />
          <ellipse
            cx="60"
            cy="45"
            rx="5"
            ry="10"
            fill="#ffffff"
            className="eye"
          />
        </svg>
      </div>
      {text && <div className="text-black mt-2 p-2">{text}</div>}
    </div>
  );
};

export default RobotAnimation;
