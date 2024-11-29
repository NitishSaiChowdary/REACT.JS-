function Home(){
    return(
        <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a href=" ">
            <div className="bg-white p-4 rounded shadow">
            <img src="https://via.placeholder.com/150" alt="Electronics Item" className="w-full h-32 object-cover mb-4"/>
              <h3 className="text-lg font-semibold">Moblies</h3>
            </div>
            </a>
            <a href=" ">
            <div className="bg-white p-4 rounded shadow">
            <a href=" "><img src="https://via.placeholder.com/150" alt="Electronics Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Refrigerator</h3>
            </div></a>
            <a href=" ">
            <div className="bg-white p-4 rounded shadow">
            <a href=" "><img src="https://via.placeholder.com/150" alt="Electronics Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Television</h3>
            </div>
            </a>
            <a href=" ">
            <div className="bg-white p-4 rounded shadow">
            <a href=" "><img src="https://via.placeholder.com/150" alt="Electronics Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Washing machine</h3>
            </div>
            </a>
            <a href="">
            <div className="bg-white p-4 rounded shadow">
            <a href=" "><img src="https://via.placeholder.com/150" alt="Electronics Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Smartwatch</h3>
            </div>
            </a>
            <a href=" ">
            <div className="bg-white p-4 rounded shadow">
            <a href=" "><img src="https://via.placeholder.com/150" alt="Electronics Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Laptops</h3>   
            </div>
            </a>
            {/* Add more electronics items here */}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Latest Fashion Trends</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="">
            <div className="bg-white p-4 rounded shadow">
              <a href=" "><img src="https://via.placeholder.com/150" alt="Fashion Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Men's</h3>
            </div>
            </a>
            <a href="">
            <div className="bg-white p-4 rounded shadow">
              <a href=" "><img src="https://via.placeholder.com/150" alt="Fashion Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Women's</h3>
            </div>
            </a>
            <a href="">
            <div className="bg-white p-4 rounded shadow">
              <a href=" "><img src="https://via.placeholder.com/150" alt="Fashion Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Kids</h3>
            </div>
            </a>
            <a href="">
            <div className="bg-white p-4 rounded shadow">
              <a href=" "><img src="https://via.placeholder.com/150" alt="Fashion Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Accessories</h3>
            </div>
            </a>
            <a href="">
            <div className="bg-white p-4 rounded shadow">
              <a href=" "><img src="https://via.placeholder.com/150" alt="Fashion Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Footwear</h3>
            </div>
            </a>
            <a href="">
            <div className="bg-white p-4 rounded shadow">
              <a href=" "><img src="https://via.placeholder.com/150" alt="Fashion Item" className="w-full h-32 object-cover mb-4"/></a>
              <h3 className="text-lg font-semibold">Sports</h3>
            </div>
            </a>
            
            
            {/* Add more fashion items here */}
          </div>
        </section>
      </main>
    </div>
    )
}
export default Home;