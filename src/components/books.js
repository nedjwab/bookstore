import React from 'react';
import Book from './book';
import Form from './form';

const Books = () => (
  <div className="container">
    <div className="single-book">
      <Book />
    </div>
    <hr />
    <Form />
  </div>

);

export default Books;
