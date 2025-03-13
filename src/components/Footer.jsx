// Footer.js
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-info text-white fixed bottom-0 w-full p-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-lg">&copy; {new Date().getFullYear()} River-Art-Online. All rights reserved.</p>

        {/* Quick Links */}
        <div className="mt-4 flex flex-wrap justify-center space-x-8">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/gallery" className="hover:text-indigo-400 transition">Gallery</Link>
          <Link to="/about" className="hover:text-indigo-400 transition">About</Link>
          <Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com/profile.php?id=61572892560565" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x hover:text-blue-600 transition"></i>
          </a>
          <a href="https://x.com/riverartonline?s=21&t=XY0XCGt3-v_ynOckR2dksQ" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x hover:text-blue-400 transition"></i>
          </a>
          {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x hover:text-pink-500 transition"></i>
          </a> */}
          {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x hover:text-blue-700 transition"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
