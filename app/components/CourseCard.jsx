import { Star } from "lucide-react";

export default function CourseCard({
  title,
  category,
  price,
  rating,
  students,
  image,
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-64">
      {/* Top Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      </div>

      {/* Details Section */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-orange-500 text-white px-2 py-1 rounded-sm text-xs font-semibold">
            {category.toUpperCase()}
          </span>
          <span className="font-bold text-orange-500 text-lg">${price}</span>
        </div>
        {/* Category Tag */}

        {/* Title */}
        <h3 className="font-semibold text-sm mt-2 mb-2 line-clamp-2 p-2">
          {title}
        </h3>

        {/* Separator Line */}
        <hr className="border-gray-200 my-2" />

        {/* Rating & Review Section */}
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-gray-500">{students} students</span>
        </div>
      </div>
    </div>
  );
}
