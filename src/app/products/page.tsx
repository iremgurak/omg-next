import Image from "next/image";
import Link from "next/link";
import { products } from "./productData";

export default function Products() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-y-4 items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 flex flex-col items-center border border-gray-200 dark:border-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800/70 cursor-pointer"
            aria-label={`View details for ${product.title}`}
          >
            <Image src={product.icon} alt={product.title} width={64} height={64} className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
