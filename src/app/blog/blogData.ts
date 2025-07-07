export interface BlogEntry {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  keywords: string[];
}

export const blogEntries: BlogEntry[] = [
  {
    id: "1",
    title: "The Future of Aluminium Manufacturing",
    summary: "How aluminium is shaping the next generation of industrial design.",
    content: "Aluminium is a versatile metal used in many industries. In this article, we explore its future applications and sustainability.",
    image: "/blog1.jpg",
    keywords: ["aluminium", "manufacturing", "future"],
  },
  {
    id: "2",
    title: "Steel Innovations in Construction",
    summary: "Modern steel products and their impact on building techniques.",
    content: "Steel remains a backbone of construction. Discover the latest innovations and how they improve safety and efficiency.",
    image: "/blog2.jpg",
    keywords: ["steel", "construction", "innovation"],
  },
  {
    id: "3",
    title: "Copper: The Unsung Hero of Technology",
    summary: "Why copper is essential in electronics and green energy.",
    content: "From wiring to renewable energy, copper is everywhere. Learn about its properties and why it's so valuable.",
    image: "/blog3.jpg",
    keywords: ["copper", "technology", "energy"],
  },
  {
    id: "4",
    title: "Sustainable Materials for a Greener Tomorrow",
    summary: "Exploring eco-friendly materials in modern industry.",
    content: "Sustainability is key. This article reviews materials and practices that help reduce environmental impact.",
    image: "/blog4.jpg",
    keywords: ["sustainability", "materials", "green"],
  },
  {
    id: "5",
    title: "Recycling Metals: Closing the Loop in Manufacturing",
    summary: "How recycling metals is transforming the supply chain and reducing waste.",
    content: "Metal recycling is a crucial part of the circular economy. This article discusses the processes, benefits, and challenges of recycling metals in modern manufacturing.",
    image: "/blog5.jpg",
    keywords: ["recycling", "metals", "manufacturing", "sustainability"],
  },
];
