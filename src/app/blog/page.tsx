
import Image from "next/image";
import Link from "next/link";
import { blogEntries } from "./blogData";

export default function Blog() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-extrabold mb-10 text-center">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {blogEntries.map((entry) => (
            <Link
              key={entry.id}
              href={`/blog/${entry.id}`}
              className="group block rounded-xl overflow-hidden shadow transition bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 cursor-pointer"
            >
              <div className="h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <Image src={entry.image} alt={entry.title} width={400} height={192} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="mb-2 text-xs text-gray-400 group-hover:text-gray-500 transition">{entry.keywords.join(", ")}</div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">{entry.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{entry.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
