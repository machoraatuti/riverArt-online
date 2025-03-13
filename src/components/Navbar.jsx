//Navbar.js

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-info shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 w-full">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">River Art Online</Link>
        </div>

        {/* Navigation Links as Tabs */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className="text-white px-4 py-2 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition duration-300 active:opacity-75"
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className="text-white px-4 py-2 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition duration-300 active:opacity-75"
          >
            Gallery
          </Link>
          <Link 
            to="/about" 
            className="text-white px-4 py-2 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition duration-300 active:opacity-75"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-white px-4 py-2 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition duration-300 active:opacity-75"
          >
            Contact
          </Link>
          <Link 
            to="/cart" 
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 active:opacity-75"
          >
            Cart
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="md:hidden">
          <button className="text-white text-2xl active:opacity-75">&#9776;</button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
