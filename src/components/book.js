import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../redux/books/books';

export default function Book() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBookEvent = (id) => {
    dispatch(deleteBook(id));
  };

  if (!books) return <p>No Books Available</p>;

  return (
    <>
      {books.map((book) => (
        <div key={book.id}>
          {book.title}

          by

          {book.author}
          <button type="submit" onClick={() => deleteBookEvent(book.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}
