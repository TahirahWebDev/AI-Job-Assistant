'use client';
import React, { useState } from 'react';

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input.trim());
    setInput('');
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full"
>
  <input
    className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    placeholder="Type your message..."
    value={input}
    onChange={e => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
  >
    Send
  </button>
</form>

  );
}
