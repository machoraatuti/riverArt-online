import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DisplayList from '../features/display/DisplayList';
import { useState, useEffect } from 'react';


import { FaArrowUp } from 'react-icons/fa';




const Gallery = () => {
    const [showScroll, setShowScroll] = useState(false);


    // Function to scroll to top of page
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SubHeader current="Gallery" />

      <div className="min-h-screen bg-gray-100 p-6">
        {/* <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Gallery</h1> */}
        
        {/* DisplayList will handle showing artworks in a grid */}
        <DisplayList />
      </div>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-success text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
