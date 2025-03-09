import { Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Investing In Stocks The Complete Course! (13 Hours)",
    category: "Health & Fitness",
    categoryColor: "bg-green-500",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 14.0,
    originalPrice: 28.0,
    instructor: "Kevin Gilbert",
    rating: 5.0,
    reviews: 357914,
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    id: 2,
    title: "Google Analytics Certification - Learn How To...",
    category: "Personal Development",
    categoryColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 14.0,
    originalPrice: 28.0,
    instructor: "Kevin Gilbert",
    rating: 5.0,
    reviews: 357914,
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    id: 3,
    title: "Adobe XD for Web Design: Essential Principles",
    category: "Productivity",
    categoryColor: "bg-red-500",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 14.0,
    originalPrice: 28.0,
    instructor: "Kevin Gilbert",
    rating: 5.0,
    reviews: 357914,
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
  {
    id: 4,
    title: "The Python Mega Course: Build 10 Real World Apps",
    category: "Music",
    categoryColor: "bg-yellow-500",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 14.0,
    originalPrice: 28.0,
    instructor: "Kevin Gilbert",
    rating: 5.0,
    reviews: 357914,
    students: "265.7K",
    level: "Beginner",
    duration: "6 hour",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="py-10 px-5">
      <h2 className="text-2xl font-bold mb-4">Our feature courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-40 h-32 object-cover"
            />

            {/* Course Details */}
            <div className="p-4 flex-1">
              {/* Category */}
              <span
                className={`text-white px-2 py-1 rounded text-xs font-bold ${course.categoryColor}`}
              >
                {course.category.toUpperCase()}
              </span>

              {/* Title */}
              <h3 className="font-semibold text-sm mt-2 mb-1 line-clamp-2">
                {course.title}
              </h3>

              {/* Instructor */}
              <p className="text-gray-500 text-xs">{course.instructor}</p>

              {/* Price */}
              <div className="flex items-center space-x-2 text-sm mt-1">
                <span className="font-bold text-gray-900">
                  ${course.price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through">
                  ${course.originalPrice.toFixed(2)}
                </span>
              </div>

              {/* Rating, Students, Level, Duration */}
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                  <span className="font-medium text-gray-900">
                    {course.rating}
                  </span>
                  <span>({course.reviews.toLocaleString()})</span>
                </div>
                <div className="flex space-x-4">
                  <span>👥 {course.students} students</span>
                  <span>📊 {course.level}</span>
                  <span>⏳ {course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
