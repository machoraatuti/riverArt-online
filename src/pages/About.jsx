//About.js
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <SubHeader current="About" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-900 to-gray-800 dark:from-indigo-950 dark:to-gray-900 min-h-[70vh] flex flex-col items-center justify-center text-center text-white px-6">
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-6xl font-extrabold drop-shadow-lg text-white">
            About RiverArt Online
          </h1>
          <p className="mt-4 text-2xl text-indigo-100 dark:text-indigo-200 drop-shadow-md">
            A world where art meets passion and creativity flourishes.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-gray-100 dark:bg-gray-800 flex flex-col items-center text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h2>
        <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          RiverArt Online is an exclusive platform dedicated to showcasing and selling unique artwork.
          Our mission is to connect artists with art lovers and provide a seamless online experience 
          for discovering and purchasing art.
        </p>

        <p className="mt-6 max-w-3xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We believe that art has the power to inspire, evoke emotions, and bring beauty to any space.
          Our platform enables both established and emerging artists to showcase their work to a global audience.
        </p>

        {/* Image Section */}
        <div className="mt-8">
          <img 
            src={'/assets/images/PHOTO-2025-03-13-16-09-77.jpg'} 
            alt="Art Gallery" 
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 dark:from-indigo-800 dark:to-purple-700 text-white text-center py-16">
        <h2 className="text-4xl font-bold text-white">Join Our Art Community</h2>
        <p className="text-lg text-indigo-100 dark:text-indigo-200 mt-4 max-w-xl mx-auto">
          Whether you're an artist or an art lover, RiverArt Online is the perfect place for you. 
          Browse, showcase, and discover stunning artworks.
        </p>
        <button 
          onClick={() => navigate('/gallery')} 
          className="mt-6 px-8 py-4 bg-white text-indigo-700 hover:bg-gray-100 dark:bg-gray-100 dark:text-indigo-800 dark:hover:bg-gray-200 rounded-md text-lg shadow-md transition transform hover:scale-105"
        >
          Explore Gallery
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default About;