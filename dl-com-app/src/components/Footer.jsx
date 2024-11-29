function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-4">NSC Store</h2>
                    <p className="mb-4">
                        Discover the best products at unbeatable prices. We offer a wide range of categories, from electronics to fashion.
                    </p>
                    <p>&copy; {new Date().getFullYear()} YourStore Inc. All rights reserved.</p>
                </div>

                {/* Product Categories */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Product Categories</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Electronics</a></li>
                        <li><a href="#" className="hover:text-white">Fashion</a></li> 
                        <li><a href="#" className="hover:text-white">Beauty & Health</a></li>
        
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-white">Help & FAQs</a></li>
                        <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
                        <li><a href="#" className="hover:text-white">Shipping Information</a></li>
                        <li><a href="#" className="hover:text-white">Track Order</a></li>
                        <li><a href="#" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
                    <p className="mb-4">Sign up for our newsletter to get updates on new products and offers.</p>
                    <form className="space-y-4">
                        <input
                            type="email"
                            className="w-full p-2 bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 border-b-2 border-gray-700"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                    <p className="mb-2">123 YourStore Lane, City, Country</p>
                    <p className="mb-2">Email: <a href="mailto:support@yourstore.com" className="hover:text-white">support@yourstore.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
                </div>
            </div>

            {/* Payment Options and Social Links */}
            <div className="mt-10 border-t border-gray-700 pt-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    {/* Payment Options */}
                    <div className="flex space-x-4 mb-6 md:mb-0">
                        <img src="/images/payment-visa.svg" alt="Visa" className="h-8" />
                        <img src="/images/payment-mastercard.svg" alt="Mastercard" className="h-8" />
                        <img src="/images/payment-paypal.svg" alt="PayPal" className="h-8" />
                        <img src="/images/payment-amex.svg" alt="American Express" className="h-8" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Add Facebook icon */}
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Add Twitter icon */}
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Add Instagram icon */}
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Add LinkedIn icon */}
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;