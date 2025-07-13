'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-10 bg-gray-50 pt-24">

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 font-serif">AI Job Assistant</h2>

        <p className="text-sm text-gray-500 mb-6">
        {new Date().toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>

        {/* Redirect input */}
        <input
          placeholder="Message the assistant..."
          onFocus={() => router.push('/chat')}
          readOnly
          className="w-full mb-8 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none cursor-pointer bg-white text-black"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Resume */}
          <Link href="/resume">
            <div className="bg-orange-50 p-6 rounded-xl hover:shadow-md cursor-pointer">
              <h3 className="font-semibold mb-2 text-black font-serif">Resume Builder</h3>
              <p className="text-sm mb-3 text-black">Generate a professional resume</p>
              <button className="px-4 py-2 rounded-md bg-orange-200 text-black font-serif text-1xl">Generate Resume</button>
            </div>
          </Link>

          {/* Interview */}
          <Link href="/interview">
            <div className="bg-blue-50 p-6 rounded-xl hover:shadow-md cursor-pointer">
              <h3 className="font-semibold mb-2 text-black font-serif">Interview Prep</h3>
              <p className="text-sm mb-3 text-black">Get practice interview questions</p>
              <button className="px-4 py-2 rounded-md bg-blue-200 text-black font-serif text-1xl">Get Questions</button>
            </div>
          </Link>

          {/* Career */}
          <Link href="/career">
            <div className="bg-green-50 p-6 rounded-xl hover:shadow-md cursor-pointer">
              <h3 className="font-semibold mb-2 text-black font-serif">Career Suggestion</h3>
              <p className="text-sm mb-3 text-black">Explore potential career paths</p>
              <button className="px-4 py-2 rounded-md bg-green-200 text-black font-serif text-1xl">Suggest Career Path</button>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}