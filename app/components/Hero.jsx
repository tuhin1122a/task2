export default function Hero() {
  return (
    <div className="relative bg-stone-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4  sm:px-6  lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Left Content */}
              <div className="sm:text-center lg:text-left lg:w-1/2">
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Learn with expert
                  <span className="block text-orange-500">
                    {" "}
                    anytime anywhere
                  </span>
                </h1>
                <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-xl sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                  Our mission is to help people find the best online courses and
                  learn from experts anytime, anywhere.
                </p>
                <div className="mt-6 sm:mt-8">
                  <button className="bg-orange-500 text-white px-8 py-3 text-lg rounded-lg hover:bg-orange-600 transition">
                    Create Account
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Students learning"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
