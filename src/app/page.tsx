"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const products = [
    {
      icon: "/file.svg",
      title: "Aluminium",
      desc: "High-quality aluminium for industrial and commercial use.",
      photo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: "/window.svg",
      title: "Steel",
      desc: "Durable steel products for construction and manufacturing.",
      photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: "/globe.svg",
      title: "Copper",
      desc: "Premium copper for electrical and plumbing applications.",
      photo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? products.length - 1 : c - 1));
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === products.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-white text-black dark:bg-black dark:text-white relative z-0">

      {/* Hero Section */}
      <header
        className="relative flex flex-col items-center justify-center flex-1 px-4 py-16 text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black overflow-hidden z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?auto=compress&w=1200')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 z-0" aria-hidden="true" />
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 relative z-10">
          Welcome to Your Business
        </h1>
        <p className="text-lg sm:text-2xl max-w-2xl mb-8 text-gray-600 dark:text-gray-200 relative z-10">
          Empowering your business with modern solutions. Fast, reliable, and
          tailored for you.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition relative z-10"
        >
          Contant Us
        </Link>
      </header>

      {/* Products Section */}
      <section
        id="products"
        className="py-16 px-0 bg-white dark:bg-black border-t border-b border-gray-100 dark:border-gray-800"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Products</h2>
          <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px]">
            <button
              aria-label="Previous product"
              onClick={prev}
              className="absolute left-4 z-20 bg-gray-100 dark:bg-gray-800 rounded-full p-3 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition top-1/2 -translate-y-1/2"
            >
              &#8592;
            </button>
            <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
              {products.map((product, i) => (
                <Link
                  href="/products"
                  key={i + '-' + current + '-' + direction}
                  className={`transition-transform duration-500 ease-in-out absolute w-full h-full flex flex-col items-center justify-end cursor-pointer 
                    ${i === current ? (direction === 1 ? 'animate-slide-in-right' : direction === -1 ? 'animate-slide-in-left' : '') : 'hidden'}`}
                  style={{ position: 'absolute', height: '100%' }}
                  tabIndex={i === current ? 0 : -1}
                  aria-label={`Go to products page for ${product.title}`}
                >
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <Image
                      src={product.photo}
                      alt={product.title + ' background'}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                      className="w-full h-full opacity-30"
                      priority={i === 0}
                    />
                  </div>
                  <div className="relative z-10 pb-10">
                    <Image
                      src={product.icon}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="mx-auto mb-4 bg-white rounded-full p-2 shadow opacity-100"
                      style={{ backgroundColor: 'white' }}
                    />
                    <h3 className="font-semibold text-2xl mb-2 text-white drop-shadow-lg">{product.title}</h3>
                    <p className="text-gray-100 text-lg drop-shadow-lg">{product.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <button
              aria-label="Next product"
              onClick={next}
              className="absolute right-4 z-20 bg-gray-100 dark:bg-gray-800 rounded-full p-3 shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition top-1/2 -translate-y-1/2"
            >
              &#8594;
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-3 h-3 rounded-full ${current === i ? "bg-black dark:bg-white" : "bg-gray-300 dark:bg-gray-700"}`}
                aria-label={`Go to product ${i + 1}`}
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

    </div>
  );
}

// Tailwind CSS custom animations
// Add these to your global CSS if not already present:
// .animate-slide-in-right { animation: slide-in-right 0.5s forwards; }
// .animate-slide-in-left { animation: slide-in-left 0.5s forwards; }
// @keyframes slide-in-right { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
// @keyframes slide-in-left { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
