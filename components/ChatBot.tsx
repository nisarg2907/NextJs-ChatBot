// Chatbot.tsx
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { RingLoader } from 'react-spinners';
import RobotAnimation from './RobotAnimation';
import MessageSection from './Messages';
import MessageInput from './Input';

const Chatbot: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        { text: "How can I assist you?", isUser: false },
      ]);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSendMessage = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
    ]);
    setShowSpinner(true);

    // Simulate bot reply with a delay
    setTimeout(() => {
      setShowSpinner(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: "Thanks for your message! I am processing your request.",
          isUser: false,
        },
      ]);
    }, 1800);
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Loading state content */}
      {loading ? (
        <div className="mb-4 mt-10 flex justify-center items-center">
          <RobotAnimation size="medium" text="Hello, I'm Pritesh" />
        </div>
      ) : (
        <div className="flex-1 flex flex-col py-4 overflow-hidden">
          <div className='mb-5 mt-5 right-0'>
             <RobotAnimation size='small'/>
             </div>
          <div className="flex-1 flex flex-col-reverse overflow-y-auto" ref={chatContainerRef}>
            <MessageSection messages={messages} />
            <div className="absolute bottom-0 mb-0 h-5 left-0 w-full ">
            {showSpinner ? (
              <RingLoader color="black" size={20} />
            ) : (
              <MessageInput onSendMessage={handleSendMessage} />
            )}
          </div>
          </div>
         
        </div>
      )}
    </div>
  );
};

export default Chatbot;
