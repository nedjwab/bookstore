import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook } from '../redux/books/books';

export default function Book() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBookEvent = (id) => {
    dispatch(deleteBook(id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  if (!books) return <p>No Books Available</p>;

  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          <p>
            {' '}
            {book.category}
          </p>
          {' '}
          {book.title}

          by

          {book.author}
          <button type="submit" onClick={() => deleteBookEvent(book.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}
