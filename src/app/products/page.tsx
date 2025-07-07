import Image from "next/image";

export default function Products() {
  const products = [
    {
      name: "Aluminium",
      desc: "High-quality aluminium for industrial and commercial use.",
      image: "/file.svg",
    },
    {
      name: "Steel",
      desc: "Durable steel products for construction and manufacturing.",
      image: "/window.svg",
    },
    {
      name: "Copper",
      desc: "Premium copper for electrical and plumbing applications.",
      image: "/globe.svg",
    },
  ];
  return (
    <div className="flex flex-col w-full min-h-screen gap-y-4 items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-10 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 flex flex-col items-center border border-gray-200 dark:border-gray-800 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800/70 cursor-pointer"
          >
            <Image src={product.image} alt={product.name} width={64} height={64} className="w-16 h-16 mb-4" />
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
