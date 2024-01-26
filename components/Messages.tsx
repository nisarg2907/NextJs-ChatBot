// components/MessageSection.tsx
"use client"
import React from 'react';

interface MessageSectionProps {
  messages: { text: string; isUser: boolean }[];
}

const MessageSection: React.FC<MessageSectionProps> = ({ messages }) => {
  return (
    <div className="space-y-2">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${
            message.isUser ? 'text-right' : 'text-left'
          } p-3 rounded-md ${
            message.isUser ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
