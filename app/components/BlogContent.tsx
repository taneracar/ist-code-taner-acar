"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import data from "../data/dummy.json";
import pic from "../assets/default.jpg";
import FilterDropdown from "../components/FilterDropdown";
import SearchBar from "../components/SearchBar"; // New search component

export default function BlogContent() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Hepsi");
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories from data
  const categories = ["Hepsi", ...new Set(data.map((item) => item.category))];

  // Filtering logic (applies both category and search filters)
  const filteredData = data.filter((item) => {
    const matchesCategory =
      selectedCategory === "Hepsi" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterDropdown
          categories={categories}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
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

              {/* Hidden button, positioned at bottom-right */}
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
          ))
        ) : (
          <p className="text-center text-white col-span-full">
            Haber bulunamadı
          </p>
        )}
      </div>
    </div>
  );
}
