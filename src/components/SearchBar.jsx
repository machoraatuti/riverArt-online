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
    <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md w-full max-w-md">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search art..."
        className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all w-full"
      />
      
      {/* Search Button */}
      <button 
        onClick={handleSearch} 
        className="bg-indigo-600 text-white rounded-full p-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all flex items-center justify-center"
      >
        Search
      </button>
      
      {/* Clear Button */}
      {query && (
        <button 
          onClick={handleClear} 
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        >
          X
        </button>
      )}
    </div>
  );
};

export default SearchBar;
