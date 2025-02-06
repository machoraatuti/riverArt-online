// Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
       

        {/* Nav Links (Tabs) */}
        <div className="flex space-x-8 text-lg w-full justify-center">
          
          <Link 
            to="/cart" 
            className="text-gray-700 px-4 py-2 rounded-md hover:bg-indigo-100 hover:text-indigo-600 transition-all"
          >
            Cart
          </Link>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
