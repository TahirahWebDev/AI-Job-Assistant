// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AI Job Readiness Assistant. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Developed by <a className="underline hover:text-blue-300">Job Assistant Team</a>
        </p>
      </div>
    </footer>
  );
}