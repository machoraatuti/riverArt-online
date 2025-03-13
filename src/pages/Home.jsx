//Home.js
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SubHeader current="Home" />
      
      {/* Full-Page Hero Section (Splash Screen) */}
      <header className="relative bg-primary bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center justify-center text-center text-white px-6">
        {/* Hero Content */}
        <div className="relative z-20">
          <h1 className="text-6xl text-white font-extrabold drop-shadow-lg leading-tight">
            RiverArt Online <br /> Discover Beautiful Artworks
          </h1>
          <p className="mt-2 text-2xl text-gray-300 drop-shadow-md max-w-3xl">
            Find the perfect piece for your space and explore unique collections from talented artists.
          </p>
          <button 
            onClick={() => navigate('/gallery')}
            className="mt-0 px-8 py-4 bg-success bg-indigo-600 text-white hover:bg-indigo-700 rounded-md text-xl shadow-xl transition transform hover:scale-105"
          >
            Explore Gallery
          </button>
         
        </div>
      </header>

      {/* Featured Section */}
      <section className="bg-info py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900">Why Choose RiverArt?</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          We provide a curated selection of stunning artworks from renowned and emerging artists.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-600">Unique Art Pieces</h3>
            <p className="text-gray-700 mt-2">Discover handpicked artwork from talented creators worldwide.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-600">Secure Payments</h3>
            <p className="text-gray-700 mt-2">Safe and reliable transactions with buyer protection.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-indigo-600">Worldwide Shipping</h3>
            <p className="text-gray-700 mt-2">Enjoy fast and secure delivery of your favorite art pieces.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary from-indigo-700 to-purple-600 text-white text-center py-20">
        <h2 className="text-5xl font-bold">Join Our Art Community</h2>
        <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
          Connect with artists, showcase your work, and explore breathtaking art pieces.
        </p>

        <button 
          onClick={() => navigate('/about')}
          className="mt-6 px-8 py-4 bg-success text-indigo-700 hover:bg-gray-300 rounded-md text-xl shadow-lg transition transform hover:scale-105"
        >
          Learn More
        </button>
        
      </section>

      <Footer />
    </div>
  );
};

export default Home;
