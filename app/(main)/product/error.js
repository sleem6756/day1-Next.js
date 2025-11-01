'use client'; // Important: error.jsx must be a Client Component

import { useEffect } from 'react';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata = {
  title: "My App",
};

export default function Error({ error, reset }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
        console.error("Error caught by Next.js boundary:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-600 via-pink-600 to-orange-600 text-white px-4">
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">Something Went Wrong</h1>
      <p className={roboto.className}>
        We couldn’t load this page due to an unexpected error.
      </p>
      <button
        onClick={() => reset()}
        className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
      >
        Try Again
      </button>
    </div>
  );
}
