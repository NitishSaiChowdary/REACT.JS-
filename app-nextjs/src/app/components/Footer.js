"use client"
const Footer = () => {
    return (
      <footer className="bg-gray-800 p-4">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  