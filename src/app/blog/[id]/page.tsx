import Image from "next/image";
import Link from "next/link";
import { blogEntries } from "../blogData";

// Accept only Promise params for maximum compatibility with your Next.js setup
export default async function BlogDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const entry = blogEntries.find((e) => e.id === id);
  if (!entry) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-3xl font-bold mb-6">Blog post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-8">
          <Image src={entry.image} alt={entry.title} width={600} height={256} className="object-cover w-full h-full" />
        </div>
        <div className="mb-2 text-xs text-gray-400">{entry.keywords.join(", ")}</div>
        <h1 className="text-4xl font-extrabold mb-6">{entry.title}</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">{entry.content}</p>
        <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
    </div>
  );
}
