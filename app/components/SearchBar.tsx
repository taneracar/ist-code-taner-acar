interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}: SearchBarProps) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Başlık ile arama"
        className="text-gray-400 p-2 w-full sm:w-80 md:w-96 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
