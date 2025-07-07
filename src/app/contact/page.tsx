export default function Contact() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
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
    </div>
  );
}
