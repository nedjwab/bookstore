import React from 'react';

const Book = (props) => {
  const { title } = props;
  const { author } = props;
  return (
    <div className="book-container">
      <h2>
        { title }
      </h2>
      <h3>
        { author }
      </h3>
    </div>
  );
};

export default Book;
