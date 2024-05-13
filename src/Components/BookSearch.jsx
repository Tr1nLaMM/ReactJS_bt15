import React, { useState } from 'react';
import './bookSearch.css'

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm);
    setSearchTerm('')
  };

  return (
    <div className='form-create'>
      <form onSubmit={handleSearch}>
        <div className="input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button type='submit'>Search!</button>
        </div>
      </form>
    </div>
  );
};

export default BookSearch;