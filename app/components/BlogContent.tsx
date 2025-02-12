"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "../data/dummy.json";
import pic from "../assets/default.jpg";
import FilterDropdown from "../components/FilterDropdown";

export default function BlogContent() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");

  const categories = ["Hepsi", ...new Set(data.map((item) => item.category))];

  const filteredData =
    selectedCategory === "Hepsi"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <FilterDropdown
        categories={categories}
        onSelectCategory={setSelectedCategory}
      />

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer relative group bg-white overflow-hidden"
            onClick={() => router.push(`/blog/${item.id}`)}
          >
            <Image
              src={pic}
              width={150}
              height={150}
              alt={item.category}
              className="rounded-md object-cover"
            />
            <div className="mt-4 text-center">
              <h2 className="text-gray-950 text-lg font-semibold">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              <span className="mt-3 text-sm text-blue-500 font-medium">
                #{item.category}
              </span>
            </div>

        
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push(`/blog/${item.id}`);
              }}
              className="absolute bottom-4 right-4 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg shadow-lg transition-all transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
