import React from 'react';
import Book from './book';

const Books = () => (
  <div className="container">
    <h1>Books list</h1>
    <div className="single-book">
      <Book title="rich dad poor dad" author="Ricky" />
      <button type="submit">Remove</button>
    </div>
  </div>

);

export default Books;
