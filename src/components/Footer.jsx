import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full p-6 text-center relative mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-lg text-gray-300">&copy; {new Date().getFullYear()} River-Art-Online. All rights reserved.</p>

        {/* Quick Links */}
        <div className="mt-4 flex flex-wrap justify-center space-x-6">
          <Link to="/" className="text-gray-400 hover:text-indigo-400 transition">Home</Link>
          <Link to="/gallery" className="text-gray-400 hover:text-indigo-400 transition">Gallery</Link>
          <Link to="/about" className="text-gray-400 hover:text-indigo-400 transition">About</Link>
          <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com/profile.php?id=61572892560565" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x text-white hover:text-blue-600 transition"></i>
          </a>
          <a href="https://x.com/riverartonline?s=21&t=XY0XCGt3-v_ynOckR2dksQ" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x text-white hover:text-blue-400 transition"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
