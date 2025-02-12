import { useState } from "react";

interface FilterDropdownProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

export default function FilterDropdown({
  categories,
  onSelectCategory,
}: FilterDropdownProps) {
  const [selected, setSelected] = useState("All");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelected(category);
    onSelectCategory(category);
  };

  return (
    <div className="text-gray-950 mb-6 flex justify-end items-center">
      <h3 className="text-white mr-3">Filtre</h3>
      <select
        value={selected}
        onChange={handleChange}
        className="p-2 border rounded-lg shadow-md bg-white cursor-pointer"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
