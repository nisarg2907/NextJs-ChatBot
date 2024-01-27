// components/Chatbot.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import RobotAnimation from './RobotAnimation';
import MessageSection from './Messages';
import MessageInput from './Input';

const Chatbot: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setMessages((prev) => [...prev, { text: 'Hello! How can I assist you?', isUser: false }]);
      scrollToBottom();
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
        { text: ' Thanks for your message! I am processing your request.', isUser: false },
      ]);
      scrollToBottom();
    }, 1000);
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  return (
    <div className="flex flex-col h-full relative">
      {loading ? (
        <div className="mb-4"><RobotAnimation /></div>
      ) : (
        <div className="flex flex-col h-full">
          <div
            ref={messagesContainerRef}
            className="flex-grow w-full overflow-y-auto"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#4a5568 #cbd5e0',
            } as React.CSSProperties}
          >
            <MessageSection messages={messages} />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-white">
            {showSpinner ? (
              <RingLoader  color="black" size={20}  />
            ) : (
              <MessageInput onSendMessage={handleSendMessage} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
