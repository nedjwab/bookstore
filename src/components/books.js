import React from 'react';
import Book from './book';
import Form from './form';

const Books = () => (
  <div className="container">
    <h1>Books list</h1>
    <div className="single-book">
      <Book title="rich dad poor dad" author="Ricky" />
      <button type="submit">Remove</button>
    </div>
    <Form />
  </div>

);

export default Books;
