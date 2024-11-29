function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul>
                            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                            <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul>
                            <li><a href="#" className="hover:text-orange-500">Help & Support</a></li>
                            <li><a href="#" className="hover:text-orange-500">Partner with Us</a></li>
                            <li><a href="#" className="hover:text-orange-500">Ride with Us</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul>
                            <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Cookie Policy</a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-orange-500">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Facebook Icon */}
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54v-2.89h2.54v-2.13c0-2.507 1.493-3.89 3.774-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.77-1.63 1.56v1.805h2.77l-.443 2.89h-2.327v7.011C18.344 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-orange-500">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Twitter Icon */}
                                    <path d="M24 4.557a9.833 9.833 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.83 9.83 0 01-3.127 1.195A4.917 4.917 0 0016.616 3c-2.724 0-4.932 2.21-4.932 4.933 0 .387.044.763.127 1.124A13.978 13.978 0 011.671 3.149 4.922 4.922 0 003.148 9.72a4.904 4.904 0 01-2.231-.616v.062a4.936 4.936 0 003.95 4.834 4.964 4.964 0 01-2.224.085 4.936 4.936 0 004.604 3.418A9.867 9.867 0 010 19.541 13.92 13.92 0 007.548 21c9.142 0 14.307-7.557 14.307-14.105 0-.215-.005-.428-.014-.641A10.22 10.22 0 0024 4.557z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-orange-500">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    {/* Instagram Icon */}
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.976.975 1.259 2.243 1.32 3.608.058 1.266.07 1.646.07 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.345 2.633-1.32 3.608-.975.976-2.243 1.259-3.608 1.32-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.345-3.608-1.32-.976-.975-1.259-2.243-1.32-3.608C2.175 15.585 2.163 15.205 2.163 12c0-3.204.012-3.584.07-4.85.062-1.366.345-2.633 1.32-3.608.975-.976 2.243-1.259 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.74 0 8.332.014 7.052.072 5.772.131 4.512.346 3.423 1.435 2.333 2.525 2.118 3.784 2.06 5.065.014 8.332 0 8.74 0 12s.014 3.668.072 4.948c.06 1.28.274 2.54 1.363 3.629 1.089 1.089 2.348 1.303 3.629 1.363C8.332 23.986 8.74 24 12 24s3.668-.014 4.948-.072c1.28-.06 2.54-.274 3.629-1.363 1.089-1.089 1.303-2.348 1.363-3.629C23.986 15.668 24 15.26 24 12s-.014-3.668-.072-4.948c-.06-1.28-.274-2.54-1.363-3.629-1.089-1.089-2.348-1.303-3.629-1.363C15.668.014 15.26 0 12 0z" />
                                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.879 0 1.44 1.44 0 012.879 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="text-center mt-8">
                    <p className="text-gray-500">&copy; 2024 Swiggy. All rights reserved.</p>
                </div>
            </div>
        </footer>


    )
}

export default Footer;
