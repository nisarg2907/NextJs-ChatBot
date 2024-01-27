// pages/index.tsx
"use client"
import React from 'react';
import Chatbot from '@/components/ChatBot';

const Home: React.FC = () => {
  return (
  
      <div className="w-1/2 mt-4 mb-4 h-full  flex flex-col p-8 text-black bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <Chatbot />
      </div>
    
  );
};

export default Home;
