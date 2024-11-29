function Navbar(){
    return(
        <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="text-2xl font-bold text-orange-500">
              <a href="#">Swiggy</a>
            </div>
  
            {/* Desktop Menu Links */}
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#" className="text-gray-600 hover:text-orange-500">Home</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Offers</a>
              <a href="#" className="text-gray-600 hover:text-orange-500">Cart</a>
              <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                Login
              </a>
            </div>
  
            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button className="text-gray-700 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
  
          {/* Mobile Menu Links */}
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Offers</a>
            <a href="#" className="text-gray-600 hover:text-orange-500">Cart</a>
            <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
              Login
            </a>
          </div>
        </div>
      </nav>
    )
}
export default Navbar;