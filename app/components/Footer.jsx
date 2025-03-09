import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section (Flex Row, Centered) */}
        <div className="flex justify-between items-center py-10">
          <div className="flex flex-col py-6 gap-5">
            <h2 className="text-3xl font-bold text-white max-w-lg py-2">
              Start learning with 67.1k students around the world.
            </h2>
            <div className="flex space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded">
                Join The Family
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded">
                Browse All Courses
              </button>
            </div>
          </div>
          <div>
            <div className="flex items-center text-6xl gap-5 py-6">
              <div>
                <p className="text-2xl font-bold text-white">6.3k</p>
                <p className="text-gray-400 text-sm">Online courses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">26k</p>
                <p className="text-gray-400 text-sm">Certified Instructor</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">99.9%</p>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section (Flex Row, Centered) */}

        {/* Footer Content (Flex Row) */}
        <div className="flex justify-between mt-12">
          {/* E-tutor Section - 1/5 width */}
          <div className="w-1/5">
            <h3 className="text-white text-lg font-semibold flex items-center">
              <span className="mr-2 text-orange-500">📚</span> E-tutor
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="p-2 bg-gray-700 hover:bg-orange-500 rounded"
              >
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 hover:bg-orange-500 rounded"
              >
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-orange-500 hover:bg-orange-600 rounded"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-700 hover:bg-orange-500 rounded"
              >
                <Twitter className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Other Sections - 4/5 width */}
          <div className="w-4/5 flex justify-between">
            {/* Top Categories */}
            <div>
              <h4 className="text-white font-semibold">TOP 4 CATEGORY</h4>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>Development</li>
                <li>Finance & Accounting</li>
                <li>Design</li>
                <li>Business</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold">QUICK LINKS</h4>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>About</li>
                <li className="text-orange-500 flex items-center">
                  Become Instructor →
                </li>
                <li>Contact</li>
                <li>Career</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold">SUPPORT</h4>
              <ul className="text-gray-400 text-sm mt-2 space-y-1">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Terms & Condition</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Download Section */}
            <div>
              <h4 className="text-white font-semibold">DOWNLOAD OUR APP</h4>
              <div className="mt-2 space-y-2">
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 flex items-center rounded">
                  📱 App Store
                </button>
                <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 flex items-center rounded">
                  📱 Play Store
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Language Selector & Bottom Text */}
        <div className="mt-12 flex justify-between items-center">
          {/* Language Selector */}
          <div>
            <select className="bg-gray-700 text-white px-4 py-2 rounded cursor-pointer">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-gray-500 text-sm mt-8">
          © 2021 - Eduflex. Designed by{" "}
          <span className="text-white">Templatecookie</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
