import Image from "next/image";
import { products } from "../productData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return notFound();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-xl shadow p-8 border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center mb-6">
          <Image src={product.icon} alt={product.title} width={64} height={64} className="mb-4" />
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        </div>
        <div className="mb-6">
          <Image src={product.photo} alt={product.title + ' photo'} width={600} height={320} className="rounded-lg object-cover w-full h-64 mb-4" />
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">{product.description}</p>
          <p className="text-gray-600 dark:text-gray-400">{product.details}</p>
        </div>
        <Link href="/products" className="text-blue-600 hover:underline">← Back to Products</Link>
      </div>
    </div>
  );
}
