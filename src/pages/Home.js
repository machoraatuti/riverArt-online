
// Home.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
//import SearchBar from '../components/SearchBar';
import SubHeader from '../components/SubHeader';
import DisplayList from '../features/display/DisplayList';

const Home = () => {
  // const handleSearch = (query) => {
  //   console.log('Searching for:', query);
  // };

  return (
    <div>
      <Navbar />
      <SubHeader current="Home" />
      <header className="bg-gray-200 text-center py-20">
        <h1 className="text-4xl font-bold">Discover Beautiful Artworks</h1>
        <p className="mt-2 text-lg">Find the perfect piece for your space</p>
        <div className="mt-4 flex justify-center">
          {/* <SearchBar onSearch={handleSearch} /> */}
        </div>
      </header>
      <DisplayList />
      <Footer />
    </div>
  );
};

export default Home;
