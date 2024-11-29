function mobiles(){
    return(
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Image Section */}
        <div className="relative">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/200" // replace with actual image URL
            alt="Samsung Galaxy A55 5G"
          />
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            5G
          </span>
        </div>
  
        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">
            SAMSUNG Galaxy A55 5G (Awesome Black, 256 GB)
          </h2>
  
          {/* Rating and Reviews */}
          <div className="flex items-center mb-2">
            <span className="text-green-600 text-sm font-semibold">4.3</span>
            <span className="ml-2 text-gray-600 text-sm">(149 Ratings & 12 Reviews)</span>
          </div>
  
          {/* Price and Discount */}
          <div className="flex items-center mb-2">
            <span className="text-xl font-bold text-gray-800">₹45,999</span>
            <span className="text-sm text-green-600 ml-2">6% off</span>
          </div>
  
          {/* Product Specs */}
          <ul className="text-sm text-gray-600 space-y-1">
            <li>12 GB RAM | 256 GB ROM | Expandable Upto 1 TB</li>
            <li>16.76 cm (6.6 inch) Full HD+ Display</li>
            <li>50MP + 12MP + 5MP | 32MP Front Camera</li>
          </ul>
        </div>
      </div>
    )
}
export default mobiles;