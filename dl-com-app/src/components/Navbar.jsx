function Navbar() {
  return (
    <nav className="bg-gray-900 text-gray-300 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <a href="" className="text-2xl font-bold text-white">NSC STORES</a>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="" className="hover:text-white">Home</a>
          <div className="group relative">
          <a href="" className="hover:text-white">Electronic</a>
          <div className="absolute hidden group-hover:block bg-gray-800 text-gray-300 mt-2 py-2 rounded-md shadow-lg z-20">
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Home Aplication</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Laptops</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Moblies</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Accessories</a>
            </div>
          </div>

          {/* Categories Dropdown */}
          <div className="group relative">
            <a href="" className="hover:text-white">Fashion</a>
            <div className="absolute hidden group-hover:block bg-gray-800 text-gray-300 mt-2 py-2 rounded-md shadow-lg z-20">
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Men's</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Women's</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Kids</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Accessories</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Footwear</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Sports</a>

            </div>
          </div>

          <a href="" className="hover:text-white">Beauty & Health</a>
          <div className="group relative">
            <a href="" className="hover:text-white">Contact</a>
            <div className="relative group">
              <div className="absolute hidden group-hover:block bg-gray-800 text-gray-300 mt-2 py-2 rounded-md shadow-lg z-20 transition-transform transform scale-75 group-hover:scale-100">
                <a href="" className="block px-4 py-2 hover:bg-gray-700">Customer care</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-700">Chat with us</a>
              </div>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex">
          <input
            type="text"
            placeholder="Search products"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300"
          />
        </div>

        {/* Icons for Cart, Notifications, Profile */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon */}
          <a href="" className="hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Cart Icon */}
            </svg>
          </a>

          {/* Notifications Icon */}
          <a href="" className="relative hover:text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Notification Bell Icon */}
            </svg>
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </a>

          {/* Profile Dropdown */}
          <div className="group relative">
            <a href="" className="hover:text-white flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Profile Icon */}
              </svg>
              <span>Account</span>
            </a>
            <div className="absolute hidden group-hover:block bg-gray-800 text-gray-300 mt-2 py-2 rounded-md shadow-lg z-20">
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Profile</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Notifications</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Sign In</a>
              <a href="" className="block px-4 py-2 hover:bg-gray-700">Logout</a>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              {/* Mobile Menu Icon */}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar;