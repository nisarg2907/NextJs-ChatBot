import React, { useState, useEffect } from "react";

interface RobotAnimationProps {
  size?: "small" | "medium" | "large";
  text?: string;
}

const RobotAnimation: React.FC<RobotAnimationProps> = ({
  size = "medium",
  text,
}) => {
  const getAnimationSize = () => {
    switch (size) {
      case "small":
        return "w-16 h-16";
      case "large":
        return "w-48 h-48";
      default:
        return "w-32 h-32";
    }
  };

  const [lookingDirection, setLookingDirection] = useState<
    "south" | "southEast" | "southWest"
  >("south"); // Track eye direction

  useEffect(() => {
    const interval = setInterval(() => {
      setLookingDirection((prev) => {
        switch (prev) {
          case "south":
            return "southEast";
          case "southEast":
            return "southWest";
          case "southWest":
            return "south";
          default:
            return "south";
        }
      });
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
            @keyframes lookSouth {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(20%);
              }
            }

            @keyframes lookSouthEast {
              0%,
              100% {
                transform: translateY(0) translateX(0);
              }
              50% {
                transform: translateY(20%) translateX(20%);
              }
            }

            @keyframes lookSouthWest {
              0%,
              100% {
                transform: translateY(0) translateX(0);
              }
              50% {
                transform: translateY(20%) translateX(-20%);
              }
            }

            @keyframes moveEyebrowsDown {
              0%,
              100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(10%);
              }
            }

            @keyframes moveEyebrowsDownRight {
              0%,
              100% {
                transform: translateY(0) translateX(0);
              }
              50% {
                transform: translateY(10%) translateX(10%);
              }
            }

            @keyframes moveEyebrowsDownLeft {
              0%,
              100% {
                transform: translateY(0) translateX(0);
              }
              50% {
                transform: translateY(10%) translateX(-10%);
              }
            }

            .eye {
              animation: ${lookingDirection === "south"
                  ? "lookSouth"
                  : lookingDirection === "southEast"
                  ? "lookSouthEast"
                  : "lookSouthWest"}
                2s infinite;
            }

            .eyebrow {
              animation: ${lookingDirection === "south"
                  ? "moveEyebrowsDown"
                  : lookingDirection === "southEast"
                  ? "moveEyebrowsDownRight"
                  : "moveEyebrowsDownLeft"}
                2s infinite;
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
          {/* Left Eyebrow */}
          <rect
            x="35"
            y="38"
            width="10"
            height="3"
            fill="#ffffff"
            className="eyebrow"
          />
          {/* Right Eyebrow */}
          <rect
            x="55"
            y="38"
            width="10"
            height="3"
            fill="#ffffff"
            className="eyebrow"
          />
        </svg>
      </div>
      {text && <div className="text-black mt-2 p-2">{text}</div>}
    </div>
  );
};

export default RobotAnimation;
