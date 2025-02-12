"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import data from "../../data/dummy.json";
import pic from "../../assets/default.jpg";

interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const router = useRouter();
  const blogItem = data.find((item) => item.id.toString() === params.id);

  if (!blogItem) return notFound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
        <h1 className="mb-10 font-extrabold text-7xl">Blog Detayı</h1>
      <div className="max-w-4xl w-full bg-white backdrop-blur-lg shadow-lg rounded-xl p-6">
        <button
          onClick={() => router.back()}
          className="mb-4 px-4 py-2 text-sm font-medium bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-600 transition"
        >
          ← Geri
        </button>

        <h1 className="text-4xl font-bold text-gray-950 mb-6 text-center">
          {blogItem.title}
        </h1>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src={pic}
            width={350}
            height={350}
            alt={blogItem.category}
            className="rounded-lg object-cover shadow-md w-full max-w-xs md:max-w-sm mx-auto"
          />

          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-800 text-lg leading-relaxed">
              {blogItem.description}
            </p>
            <span className="mt-3 text-sm text-blue-700 font-medium block">
              Kategori: {blogItem.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
