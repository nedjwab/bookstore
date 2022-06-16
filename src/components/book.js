import React from 'react';

const Book = (props) => {
  const { title } = props;
  const { author } = props;
  return (
    <div className="book-container">
      <h2>
        This is the title
        { title }
      </h2>
      <h3>
        This is the author
        { author }
      </h3>
    </div>
  );
};

export default Book;
