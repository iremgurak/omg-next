"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const features = [
    {
      icon: "/file.svg",
      title: "Feature One",
      desc: "Short description of your first feature.",
    },
    {
      icon: "/window.svg",
      title: "Feature Two",
      desc: "Short description of your second feature.",
    },
    {
      icon: "/globe.svg",
      title: "Feature Three",
      desc: "Short description of your third feature.",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? features.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === features.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-white text-black dark:bg-black dark:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">Your Business</span>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 px-4 py-16 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Welcome to Your Business
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl mb-8 text-gray-600 dark:text-gray-300">
          Empowering your business with modern solutions. Fast, reliable, and
          tailored for you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 px-4 bg-white dark:bg-black border-t border-b border-gray-100 dark:border-gray-800"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="relative flex items-center justify-center max-w-md mx-auto h-56">
            <button
              aria-label="Previous feature"
              onClick={prev}
              className="absolute left-0 z-10 bg-gray-100 dark:bg-gray-800 rounded-full p-2 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              &#8592;
            </button>
            <div className="w-full px-8 overflow-hidden h-56 flex items-center justify-center relative">
              <div
                key={current}
                className={`transition-transform duration-500 ease-in-out absolute w-full flex flex-col items-center ${direction === 1 ? 'animate-slide-in-right' : direction === -1 ? 'animate-slide-in-left' : ''}`}
                style={{ position: 'absolute' }}
              >
                <Image
                  src={features[current].icon}
                  alt={features[current].title}
                  width={48}
                  height={48}
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold mb-2">{features[current].title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{features[current].desc}</p>
              </div>
            </div>
            <button
              aria-label="Next feature"
              onClick={next}
              className="absolute right-0 z-10 bg-gray-100 dark:bg-gray-800 rounded-full p-2 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              &#8594;
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${current === i ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-700"}`}
                aria-label={`Go to feature ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Write a short paragraph about your business, your mission, and what
            makes you unique. This is your chance to connect with your audience.
          </p>
        </div>
      </section>

      {/* Contact Section removed. Use /contact page instead. */}

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100 dark:border-gray-800">
        &copy; {new Date().getFullYear()} Your Business. All rights reserved.
      </footer>
    </div>
  );
}

// Tailwind CSS custom animations
// Add these to your global CSS if not already present:
// .animate-slide-in-right { animation: slide-in-right 0.5s forwards; }
// .animate-slide-in-left { animation: slide-in-left 0.5s forwards; }
// @keyframes slide-in-right { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
// @keyframes slide-in-left { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
