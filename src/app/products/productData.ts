export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  photo: string;
  details: string;
}

export const products: Product[] = [
  {
    id: "aluminium",
    title: "Aluminium",
    description: "High-quality aluminium for industrial and commercial use.",
    icon: "/file.svg",
    photo: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    details: "Our aluminium products are sourced from top suppliers and are suitable for a wide range of applications, including construction, transportation, and packaging. We offer custom sizes and finishes to meet your project needs.",
  },
  {
    id: "steel",
    title: "Steel",
    description: "Durable steel products for construction and manufacturing.",
    icon: "/window.svg",
    photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    details: "Our steel selection includes structural beams, sheets, and custom fabrications. Engineered for strength and reliability, our steel products are ideal for demanding environments and large-scale projects.",
  },
  {
    id: "copper",
    title: "Copper",
    description: "Premium copper for electrical and plumbing applications.",
    icon: "/globe.svg",
    photo: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    details: "We provide high-conductivity copper for wiring, plumbing, and industrial uses. Our copper products are available in various forms and are known for their purity and performance.",
  },
];
