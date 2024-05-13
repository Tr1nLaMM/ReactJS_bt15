import React from 'react';
import './bookPagenation.css'
const BookPagenation = ({ totalBooks, booksPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="form-create">
      <div className="button-container">

        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => onPageChange(number)} className={currentPage === number ? 'active' : ''}>
            {number}
          </button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BookPagenation;