// components/MessageInput.tsx
"use client"
import React, { useState } from 'react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    onSendMessage(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex items-center w-full"> {/* Add flex and items-center */}
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type your message..."
    />
    <button onClick={handleSendMessage}>Send</button>
  </div>
  );
};

export default MessageInput;
