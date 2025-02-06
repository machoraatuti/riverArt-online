// DisplayList.js
import { useState } from "react";
import ArtCard from "../../components/ArtCard";
import SearchBar from "../../components/SearchBar";

const DisplayList = () => {
  const artworks = [
    { id: 1, title: 'Sunset Bliss', artist: 'Jane Doe', price: 150, image: '/assets/images/1738770399641.jpg' },
    { id: 2, title: 'Ocean Dreams', artist: 'John Smith', price: 200, image: '/assets/images/1738770399668.jpg' },
    { id: 3, title: 'Mountain Serenity', artist: 'Alice Johnson', price: 250, image: '/assets/images/1738770399695.jpg' },
    { id: 4, title: 'Forest Whisper', artist: 'Bob Brown', price: 300, image: '/assets/images/1738770399723.jpg' },
    { id: 7, title: 'Night Sky', artist: 'Ethan Green', price: 450, image: '/assets/images/1738770399805.jpg' },
    { id: 8, title: 'Morning Dew', artist: 'Fiona Harris', price: 500, image: '/assets/images/1738770399834.jpg' },
    { id: 9, title: 'Autumn Leaves', artist: 'George Clark', price: 550, image: '/assets/images/1738770399861.jpg' },
    { id: 10, title: 'Winter Frost', artist: 'Hannah Lewis', price: 600, image: '/assets/images/1738770399891.jpg' },
    { id: 11, title: 'Spring Blossom', artist: 'Ian Walker', price: 650, image: '/assets/images/1738770399922.jpg' },
    { id: 12, title: 'Summer Heat', artist: 'Jenna Hall', price: 700, image: '/assets/images/1738770399950.jpg' },
    { id: 13, title: 'Golden Hour', artist: 'Kevin Young', price: 750, image: '/assets/images/1738770399980.jpg' },
    { id: 14, title: 'Twilight Glow', artist: 'Laura Allen', price: 800, image: '/assets/images/1738770400008.jpg' },
    { id: 15, title: 'Rainbow Bridge', artist: 'Mike Scott', price: 850, image: '/assets/images/1738770400037.jpg' },
    { id: 16, title: 'Starry Night', artist: 'Nina King', price: 900, image: '/assets/images/1738770400080.jpg' },
    { id: 17, title: 'Moonlit Lake', artist: 'Oscar Wright', price: 950, image: '/assets/images/1738770400119.jpg' },
    { id: 18, title: 'Sunrise Peak', artist: 'Paul Adams', price: 1000, image: '/assets/images/1738770400159.jpg' },
    { id: 19, title: 'Sunset Valley', artist: 'Quincy Baker', price: 1050, image: '/assets/images/1738770400191.jpg' },
    { id: 20, title: 'Ocean Breeze', artist: 'Rachel Carter', price: 1100, image: '/assets/images/1738770400220.jpg' },
    { id: 21, title: 'Mountain Echo', artist: 'Steve Diaz', price: 1150, image: '/assets/images/1738770400250.jpg' },
    { id: 22, title: 'Forest Path', artist: 'Tina Flores', price: 1200, image: '/assets/images/1738770400274.jpg' },
    { id: 23, title: 'Desert Storm', artist: 'Uma Garcia', price: 1250, image: '/assets/images/1738770400302.jpg' },
    { id: 24, title: 'Cityscape', artist: 'Victor Hernandez', price: 1300, image: '/assets/images/1738770400329.jpg' },
    { id: 25, title: 'Nightfall', artist: 'Wendy Martinez', price: 1350, image: '/assets/images/1738770400355.jpg' },
  ];

  const [query, setQuery] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    const filtered = artworks.filter((art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArtworks(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((art) => (
            <ArtCard key={art.id} art={art} onAddToCart={() => console.log('Added to cart:', art)} />
          ))
        ) : (
          <p>No results found for "{query}"</p> // Show this message when no results match the search
        )}
      </div>
    </div>
  );
};

export default DisplayList;
