'use client';

import { useState, useRef, useEffect } from 'react';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async (input: string) => {
    setMessages(prev => [...prev, `You: ${input}`, 'Assistant: ...']);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const reply = data.response;

      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = `Assistant: ${reply}`;
        return updated;
      });
    } catch (err) {
      setMessages(prev => [...prev, 'Assistant: Error talking to backend']);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
      
    <main className="min-h-screen bg-gray-100 pt-2 px-4 pb-6 flex justify-center font-serif">
      <div className="w-full max-w-5xl bg-gray-100 rounded-2xl flex flex-col justify-between">
        <h1 className='text-center font-bold font-serif text-3xl pt-6'>Ask About Career</h1>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((msg, idx) => {
            const isUser = msg.startsWith('You:');
            return (
              <ChatBubble
                key={idx}
                message={msg.replace('You: ', '').replace('Assistant: ', '')}
                isUser={isUser}
              />
            );
          })}
          <div ref={scrollRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 px-4 py-3 bg-white rounded-b-2xl">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </main>
  );
}
