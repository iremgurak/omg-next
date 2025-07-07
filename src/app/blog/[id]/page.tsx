import Image from "next/image";
import Link from "next/link";

interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const { id } = params;
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <div className="h-64 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-8">
          <Image src={`/blog${id}.jpg`} alt={`Blog ${id}`} width={600} height={256} className="object-cover w-full h-full" />
        </div>
        <div className="mb-2 text-xs text-gray-400">keyword{id}, tag{id}, topic{id}</div>
        <h1 className="text-4xl font-extrabold mb-6">Blog Post Title {id}</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">This is the full article for blog post {id}. Replace this with your real content.</p>
        <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
    </div>
  );
}
