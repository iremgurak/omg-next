
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)] bg-white text-black dark:bg-black dark:text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Image src="/next.svg" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold tracking-tight">Your Business</span>
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Contact Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full text-center">
          <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you soon.</p>
          <form className="flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
              rows={4}
            />
            <button
              type="submit"
              className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-100 dark:border-gray-800">
        &copy; {new Date().getFullYear()} Your Business. All rights reserved.
      </footer>
    </div>
  );
}
