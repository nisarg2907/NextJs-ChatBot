// components/Chatbot.tsx
"use client"
// components/Chatbot.tsx
import React, { useState, useEffect } from 'react';
import RobotAnimation from './RobotAnimation';
import MessageSection from './Messages';
import Input from './Input';

const Chatbot: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

  // Simulate loading delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setMessages([...messages, { text: 'Hello! How can I assist you?', isUser: false }]);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: `You: ${message}`, isUser: true }]);
    // Simulate bot reply with a delay
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: 'Bot: Thanks for your message! I am processing your request.', isUser: false },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full p-4 relative">
        <div className="flex-grow mb-4">
          <MessageSection messages={messages} />
        </div>
      
     <div className="absolute bottom-0 left-0 w-full right-0 p-4 bg-white"> {/* Already corrected */}
      <Input onSendMessage={handleSendMessage} />
    </div>
    </div>
  );
};

export default Chatbot;
