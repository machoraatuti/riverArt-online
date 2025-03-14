//Gallery.jsx
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
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <SubHeader current="Gallery" />

            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 dark:from-gray-950 dark:to-indigo-950 p-6 text-white text-center">
                <h1 className="text-5xl font-bold mb-6">Explore Our Art Collection</h1>
                <p className="text-lg text-gray-200 dark:text-gray-300 max-w-2xl mx-auto">
                    Browse and discover unique and beautiful artworks from talented artists.
                </p>
                
                {/* DisplayList will handle showing artworks in a grid */}
                <div className="mt-8">
                    <DisplayList />
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition duration-300"
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
