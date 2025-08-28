export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a test page to verify TailwindCSS is working properly with
            responsive design, animations, and modern styling.
          </p>
        </header>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Feature One
            </h3>
            <p className="text-gray-600">
              Testing responsive grid layouts and card components with hover
              effects.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Feature Two
            </h3>
            <p className="text-gray-600">
              Verifying color utilities and spacing classes work correctly.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Feature Three
            </h3>
            <p className="text-gray-600">
              Testing responsive breakpoints and column spanning.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
            Primary Button
          </button>
          <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-medium px-6 py-3 border border-gray-300 rounded-lg transition-colors duration-200">
            Secondary Button
          </button>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-200">
            Gradient Button
          </button>
        </div>

        {/* Status Indicators */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            TailwindCSS Status Check
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Colors and utilities ✓</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Responsive breakpoints ✓</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">
                Hover effects and transitions ✓
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-700">Typography and spacing ✓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
