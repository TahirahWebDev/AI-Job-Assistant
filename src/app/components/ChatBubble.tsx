import React from 'react';
import clsx from 'clsx';

type Props = {
  message: string;
  isUser?: boolean;
};

export default function ChatBubble({ message, isUser = false }: Props) {
  return (
    <div className={clsx('flex items-end gap-3', isUser ? 'justify-end' : 'justify-start')}>
      {!isUser && (
        <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white font-bold shadow">
          🤖
        </div>
      )}
      <div
        className={clsx(
          'px-4 py-3 rounded-2xl text-sm md:text-base whitespace-pre-wrap break-words leading-relaxed shadow-sm',
          'max-w-[75%]',
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-white text-gray-800 rounded-bl-sm border'
        )}
      >
        {message}
      </div>
      {isUser && (
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow">
          🧑
        </div>
      )}
    </div>
  );
}
