// components/MessageSection.tsx
import React from 'react';

interface MessageSectionProps {
  messages: { text: string; isUser: boolean }[];
}

const MessageSection: React.FC<MessageSectionProps> = ({ messages }) => {
  return (
    <div className="space-y-2 w-full h-full">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${
            message.isUser ? 'text-right self-end p-3 px-5 rounded-md bg-gray-500 text-white w-1/2 ml-auto' : 'text-left p-3 px-5 rounded-md bg-gray-200 w-1/2 mr-auto'
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
