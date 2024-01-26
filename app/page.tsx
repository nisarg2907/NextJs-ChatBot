// pages/index.tsx
"use client"
import React from 'react';
import Chatbot from '../components/ChatBot';
import RobotAnimation from '@/components/RobotAnimation';

const Home: React.FC = () => {
  return (
    <div className='bg-blue-200 h-screen w-screen flex flex-col justify-center items-center'>
      <div className="w-1/2 h-500 p-8 text-black bg-white rounded-lg shadow-md overflow:hidden overflow-y:auto"> {/* Add overflow-y-auto */}
        <RobotAnimation/>
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;
