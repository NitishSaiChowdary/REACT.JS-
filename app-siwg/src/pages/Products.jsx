function Products() {

  const Products = [
    {
      name: "Bawarchi",
      cuisine: "Indian",
      address: "RTC X Roads",
      rating: 4.5,

      imgSrc: "",
      deliveryTime:35
    },
    {
      name: "Paradise",
      cuisine: "Biryani",
      address: "Paradise Circle",
      rating: 4.7,

      imgSrc: "",
      deliveryTime:40
    },
    {
      name: "Shah Ghouse",
      cuisine: "Mughlai",
      address: "Toli Chowki",
      rating: 4.6,

      imgSrc: "",
      deliveryTime:50
    },
    {
      name: "Cafe Bahar",
      cuisine: "Multi-cuisine",
      address: "Basheer Bagh",
      rating: 4.4,

      imgSrc: "https://example.com/cafebahar.jpg",
      deliveryTime:30
    },
    {
      name: "Chutneys",
      cuisine: "South Indian",
      address: "Banjara Hills",
      rating: 4.3,

      imgSrc: "https://example.com/chutneys.jpg",
      deliveryTime:40
    },
    {
      name: "Pista House",
      cuisine: "Bakery, Biryani",
      address: "Shalibanda",
      rating: 4.2,

      imgSrc: "https://example.com/pistahouse.jpg",
      deliveryTime:35
    },
    {
      name: "Ohri's",
      cuisine: "Multi-cuisine",
      address: "Banjara Hills",
      rating: 4.3,

      imgSrc: "https://example.com/ohris.jpg",
      deliveryTime:50
    },
    {
      name: "Dakshin",
      cuisine: "South Indian",
      address: "Somajiguda",
      rating: 4.5,

      imgSrc: "https://example.com/dakshin.jpg",
      deliveryTime:25
    },
    {
      name: "Karachi Bakery",
      cuisine: "Bakery",
      address: "Mozamjahi Market",
      rating: 4.4,

      imgSrc: "https://example.com/karachibakery.jpg",
      deliveryTime:40
    },
    {
      name: "Hotel Shadab",
      cuisine: "Mughlai",
      address: "Ghansi Bazaar",
      rating: 4.4,

      imgSrc: "https://example.com/shadab.jpg",
      deliveryTime: 50
    },
    {
      name: "Santosh Dhaba",
      cuisine: "North Indian",
      address: "Abids",
      rating: 4.1,

      imgSrc: "https://example.com/santoshdhaba.jpg",
      deliveryTime: 20-30
    },
    {
      name: "Mehfil",
      cuisine: "Biryani",
      address: "Narayanguda",
      rating: 4.0,

      imgSrc: "https://example.com/mehfil.jpg",
      deliveryTime: 30-50
    },
    {
      name: "Rayalaseema Ruchulu",
      cuisine: "Andhra",
      address: "Jubilee Hills",
      rating: 4.5,

      imgSrc: "https://example.com/rayalaseema.jpg",
      deliveryTime: 40-45
    },
    {
      name: "Tatva",
      cuisine: "Vegetarian",
      address: "Kukatpally",
      rating: 4.3,

      imgSrc: "https://example.com/tatva.jpg",
      deliveryTime: 25-30
    },
    {
      name: "Mandi@36",
      cuisine: "Mandi, Mughlai",
      address: "Kondapur",
      rating: 4.2,
      imgSrc: "https://example.com/mandi36.jpg",
      deliveryTime: 45-50
    },
    {
      name: "AB's - Absolute Barbecues",
      cuisine: "Barbecue",
      address: "Jubilee Hills",
      rating: 4.5,

      imgSrc: "https://example.com/absbarbecue.jpg",
      deliveryTime: 35-45
    },
    {
      name: "Adaa",
      cuisine: "Hyderabadi",
      address: "Taj Falaknuma Palace",
      rating: 4.8,

      imgSrc: "https://example.com/adaa.jpg",
      deliveryTime: 50-55
    },
    {
      name: "Exotica",
      cuisine: "Multi-cuisine",
      address: "Banjara Hills",
      rating: 4.3,

      imgSrc: "https://example.com/exotica.jpg",
      deliveryTime: 40-50
    },
    {
      name: "Fusion 9",
      cuisine: "Continental",
      address: "Banjara Hills",
      rating: 4.4,

      imgSrc: "https://example.com/fusion9.jpg",
      deliveryTime: 30-40
    },
    {
      name: "Mandil",
      cuisine: "Arabic, Mughlai",
      address: "Tolichowki",
      rating: 4.2,

      imgSrc: "https://example.com/mandil.jpg",
      deliveryTime: 35-40
    },
    {
      name: "Punjab Grill",
      cuisine: "North Indian",
      address: "Begumpet",
      rating: 4.5,

      imgSrc: "https://example.com/punjabgrill.jpg",
      deliveryTime: 25-35
    },
    {
      name: "Roastery Coffee House",
      cuisine: "Café",
      address: "Banjara Hills",
      rating: 4.6,

      imgSrc: "https://example.com/roastery.jpg",
      deliveryTime: 20-30
    },
    {
      name: "The Fisherman’s Wharf",
      cuisine: "Seafood, Goan",
      address: "Financial District",
      rating: 4.5,

      imgSrc: "https://example.com/fishermanswharf.jpg",
      deliveryTime: 45-50
    },
    {
      name: "Moksh",
      cuisine: "North Indian, Chinese",
      address: "Necklace Road",
      rating: 4.3,

      imgSrc: "https://example.com/moksh.jpg",
      deliveryTime: 30-35
    },
    {
      name: "Almond House",
      cuisine: "Sweets",
      address: "Himayat Nagar",
      rating: 4.4,

      imgSrc: "https://example.com/almondhouse.jpg",
      deliveryTime: 15-20
    },
    {
      name: "Palamuru Grill",
      cuisine: "Telangana",
      address: "Gachibowli",
      rating: 4.2,

      imgSrc: "https://example.com/palamurugrill.jpg",
      deliveryTime: 35-40
    },
    {
      name: "Shamrock The Irish Bar",
      cuisine: "Pub",
      address: "Gachibowli",
      rating: 4.3,

      imgSrc: "https://example.com/shamrock.jpg",
      deliveryTime: 45-50
    },
    {
      name: "Sahib’s Barbeque",
      cuisine: "Barbecue",
      address: "Madhapur",
      rating: 4.6,

      imgSrc: "https://example.com/sahibsbbq.jpg",
      deliveryTime: 30-35
    },
    {
      name: "Dum Pukht Begum's",
      cuisine: "Awadhi, Mughlai",
      address: "ITC Kohenur",
      rating: 4.7,

      imgSrc: "https://example.com/dumpukht.jpg",
      deliveryTime: 50-55
    },
    {
      name: "Flechazo",
      cuisine: "Mediterranean, Asian",
      address: "Gachibowli",
      rating: 4.5,
      imgSrc: "https://example.com/flechazo.jpg",
      deliveryTime: 35-40
    }
  ];

  return (
    <div className="container mx-auto p-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Products.map((Product, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-40 object-cover"
              src={Product.imgSrc}
              alt={Product.name}
            />
            <div className="p-4">
              <h2 className="font-bold text-lg">{Product.name}</h2>
              <div className="flex items-center text-gray-600 mt-1">
                <span className="text-green-600 font-semibold">
                  Rating: {Product.rating}
                </span>
                <span className="ml-2 text-black decoration-gray-200">Deliverytime: {Product.deliveryTime} mins</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">{Product.cuisine}</p>
              <p className="text-gray-500 text-sm">{Product.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Products;