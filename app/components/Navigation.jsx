import { Bell, GraduationCap, Heart, Search, ShoppingCart } from "lucide-react";

export default function Navigation() {
  return (
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
  );
}
