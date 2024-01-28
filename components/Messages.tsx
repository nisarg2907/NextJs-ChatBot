import React, { useEffect, useRef } from "react";

interface MessageSectionProps {
  messages: { text: string; isUser: boolean }[];
}

const MessageSection: React.FC<MessageSectionProps> = ({ messages }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="space-y-2 w-full h-full overflow-y-auto"
      style={{ height: "calc(100% - 54px)" }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${
            message.isUser ? "text-right self-end" : "text-left"
          } p-3 px-5 rounded-md bg-gray-200 ${
            message.isUser ? "text-white bg-gray-500" : "bg-gray-200"
          } w-full md:w-1/2 lg:w-2/3 xl:w-1/2 ${
            message.isUser ? "ml-auto" : "mr-auto"
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default MessageSection;
