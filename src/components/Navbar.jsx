import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the link is active
  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-indigo-400 border-b-2 border-indigo-400'
      : 'text-white border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition duration-300';
  };

  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 w-full">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">River Art Online</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`px-4 py-2 ${getLinkClass('/')}`}
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className={`px-4 py-2 ${getLinkClass('/gallery')}`}
          >
            Gallery
          </Link>
          <Link 
            to="/about" 
            className={`px-4 py-2 ${getLinkClass('/about')}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`px-4 py-2 ${getLinkClass('/contact')}`}
          >
            Contact
          </Link>
            <Link 
              to="/cart" 
              className={`px-4 py-2 ${location.pathname === '/cart' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-white border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition duration-300'}`}
            >
              Cart
            </Link>

          <Link 
            to="/legal" 
            className={`px-4 py-2 ${getLinkClass('/legal')}`}
          >
            Legal
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white text-left p-4 space-y-4 absolute w-full top-full left-0 shadow-lg">
          <Link to="/" className="block py-2 hover:text-indigo-400" onClick={toggleMenu}>Home</Link>
          <Link to="/gallery" className="block py-2 hover:text-indigo-400" onClick={toggleMenu}>Gallery</Link>
          <Link to="/about" className="block py-2 hover:text-indigo-400" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block py-2 hover:text-indigo-400" onClick={toggleMenu}>Contact</Link>
          <Link to="/legal" className="block py-2 hover:text-indigo-400" onClick={toggleMenu}>Legal</Link>
          <hr />
          <Link to="/cart" className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300" onClick={toggleMenu}>Cart</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
