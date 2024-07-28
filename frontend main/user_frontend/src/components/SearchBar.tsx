import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  // State variables for search term and advanced search toggle
  const [searchTerm, setSearchTerm] = useState('');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  // Handle search form submission
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
    // Perform search logic here
  };

  return (
    <div className="flex flex-col items-center">
      {/* Search form */}
      <form onSubmit={handleSearch} className="flex items-center bg-blue-600 px-3 py-2">
        {/* Search input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-80 px-5 py-3 text-lg border border-gray-300 focus:outline-none focus:ring-[0.1px] focus:ring-blue-600"
          placeholder="Search your Query"
        />
        {/* Search button */}
        <button
          type="submit"
          className="px-5 py-3 text-lg bg-[#9e6b22] text-white"
        >
          Search
        </button>
        {/* Toggle advanced search button */}
        <button
          type="button"
          className="ml-4 p-4 text-lg text-white hover:underline"
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
        >
          Advanced Search
        </button>
      </form>

      {/* Advanced search options */}
      {showAdvancedSearch && (
        <div className="w-full max-w-2xl mt-4 p-4 border border-gray-300 rounded-lg">
          <p>Advanced Search Options</p>
          {/* Add your advanced search options here */}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
