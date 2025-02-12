import Image from "next/image";
import data from "../data/dummy.json";

export default function BlogContent() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            <Image
              src={"/images/default.png"}
              width={150}
              height={150}
              alt={item.category}
              className="rounded-md object-cover"
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              <span className="mt-3 text-sm text-blue-500 font-medium">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
