import { bestSellingCourses } from "@/data";
import {
  BarChart2,
  Bell,
  BookOpen,
  Camera,
  GraduationCap,
  Heart,
  Monitor,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import CategoryCard from "./components/CategoryCard";
import CourseCard from "./components/CourseCard";
import FeaturedCourses from "./components/FeaturedCourses";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">E-tutor</span>
              <div className="ml-10">
                <button className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Browse
                </button>
              </div>
              <div className="ml-4 flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="What do you want to learn..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
              <Heart className="h-6 w-6 text-gray-600 cursor-pointer" />
              <ShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer" />
              <button className="text-orange-500 hover:text-orange-600 px-4 py-2">
                Create Account
              </button>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />
      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Browse top category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Label"
            courses="63,476 Courses"
            bgColor="bg-indigo-50"
            textColor="text-indigo-600"
          />
          <CategoryCard
            icon={<BarChart2 className="h-6 w-6" />}
            title="Business"
            courses="52,822 Courses"
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
          <CategoryCard
            icon={<Monitor className="h-6 w-6" />}
            title="IT & Software"
            courses="22,649 Courses"
            bgColor="bg-red-50"
            textColor="text-red-600"
          />
          <CategoryCard
            icon={<Monitor className="h-6 w-6" />}
            title="IT & Software"
            courses="22,649 Courses"
            bgColor="bg-red-50"
            textColor="text-red-600"
          />
          <CategoryCard
            icon={<Users className="h-6 w-6" />}
            title="Personal Development"
            courses="20,126 Courses"
            bgColor="bg-orange-50"
            textColor="text-orange-600"
          />
          <CategoryCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Office Productivity"
            courses="13,932 Courses"
            bgColor="bg-purple-50"
            textColor="text-purple-600"
          />
          <CategoryCard
            icon={<BarChart2 className="h-6 w-6" />}
            title="Marketing"
            courses="12,068 Courses"
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
          <CategoryCard
            icon={<Camera className="h-6 w-6" />}
            title="Photography & Video"
            courses="6,196 Courses"
            bgColor="bg-yellow-50"
            textColor="text-yellow-600"
          />
        </div>
      </div>

      {/* Best Selling Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Best selling courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellingCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
      <FeaturedCourses />
    </div>
  );
}
