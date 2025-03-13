//About.js
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

const About = () => {
  const navigate = useNavigate(); // Enables navigation to other pages

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SubHeader current="About" />

      {/* Hero Section */}
      <section className="relative bg-success min-h-[70vh] flex flex-col items-center justify-center text-center text-white px-6">
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-6xl text-white font-extrabold drop-shadow-lg">About RiverArt Online</h1>
          <p className="mt-4 text-2xl text-white drop-shadow-md">
            A world where art meets passion and creativity flourishes.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="bg-gray-100 flex flex-col items-center text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
        <p className="max-w-3xl text-lg text-gray-700 leading-relaxed">
          RiverArt Online is an exclusive platform dedicated to showcasing and selling unique artwork.
          Our mission is to connect artists with art lovers and provide a seamless online experience 
          for discovering and purchasing art.
        </p>

        <p className="mt-6 max-w-3xl text-lg text-gray-700 leading-relaxed">
          We believe that art has the power to inspire, evoke emotions, and bring beauty to any space.
          Our platform enables both established and emerging artists to showcase their work to a global audience.
        </p>

        {/* Image Section */}
        <div className="mt-8">
          <img 
            src={`${process.env.PUBLIC_URL}/assets/images/PHOTO-2025-03-13-16-09-77.jpg`} 
            alt="Art Gallery" 
            className="w-full max-w-2xl rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white text-center py-16">
        <h2 className="text-4xl font-bold">Join Our Art Community</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-xl mx-auto">
          Whether you're an artist or an art lover, RiverArt Online is the perfect place for you. 
          Browse, showcase, and discover stunning artworks.
        </p>
        <button 
          onClick={() => navigate('/gallery')} 
          className="mt-6 px-8 py-4 bg-warning text-indigo-700 hover:bg-gray-300 rounded-md text-lg shadow-md transition transform hover:scale-105"
        >
          Explore Gallery
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default About;

  