import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import ArtListings from './features/art/ArtListings';
import ArtDetails from './pages/ArtDetails';
import Cart from './pages/Cart';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/art" element={<ArtListings />} />
        <Route path="/art/:id" element={<ArtDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
