'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-gray-800 p-4 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/favicon.ico" // 🔁 Replace this with your actual logo path
            width={28}
            height={28}
            alt="AI Job Assistant Logo"
            className="ml-4 rounded-full"
          />
          <span className="font-bold text-xl font-serif text-gray-700">AI Job Assistant</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:bg-orange-100 px-3 py-2 rounded font-serif text-md">
            Home
          </Link>
          <Link href="/chat" className="hover:bg-blue-100 px-3 py-2 rounded font-serif text-md">
            Chat
          </Link>
          <Link href="/resume" className="hover:bg-orange-100 px-3 py-2 rounded font-serif text-md">
            Resume
          </Link>
          <Link href="/interview" className="hover:bg-blue-100 px-3 py-2 rounded font-serif text-md">
            Interview
          </Link>
          <Link href="/career" className="hover:bg-green-100 px-3 py-2 rounded font-serif text-md">
            Career
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-1">
          <Link href="/" className="block px-3 py-2 hover:bg-orange-100 rounded font-serif text-sm">
            Home
          </Link>
          <Link href="/chat" className="block px-3 py-2 hover:bg-blue-100 rounded font-serif text-sm">
            Chat
          </Link>
          <Link href="/resume" className="block px-3 py-2 hover:bg-orange-100 rounded font-serif text-sm">
            Resume
          </Link>
          <Link href="/interview" className="block px-3 py-2 hover:bg-blue-100 rounded font-serif text-sm">
            Interview
          </Link>
          <Link href="/career" className="block px-3 py-2 hover:bg-green-100 rounded font-serif text-sm">
            Career
          </Link>
        </div>
      )}
    </nav>
  );
}
