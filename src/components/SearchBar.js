// SearchBar.js
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    onSearch(''); // Optionally reset the search results if needed
  };

  return (
    <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md w-full max-w-md">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search art..."
        className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all w-full"
      />
      
      {/* Search Button */}
      <button 
  onClick={handleSearch} 
  className="bg-brown-500 text-blue rounded-full p-3 hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all flex items-center justify-center"
>
  Search
</button>


      
      {/* Clear Button */}
      {query && (
        <button 
          onClick={handleClear} 
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
