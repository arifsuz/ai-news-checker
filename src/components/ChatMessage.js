import React from 'react';

const ChatMessage = ({ sender, text }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`px-4 py-2 rounded-lg max-w-xs ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-300 text-gray-800 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;