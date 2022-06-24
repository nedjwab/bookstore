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
        <section className="book" key={book.id}>
          <div div className="book-informations">
            <p className="book-category">
              {' '}
              {book.category}
            </p>
            {' '}
            <p className="book-title">
              {book.title}
            </p>
            {' '}
            <p className="book-author">
              {book.author}
            </p>
            <div className="buttons-container">
              <button className="buttons" type="submit">Comments</button>
              <button className="buttons" type="submit" onClick={() => deleteBookEvent(book.id)}>Remove</button>
              <button className="buttons" type="submit">Edit</button>
            </div>
          </div>
          <div className="progressbar">
            <p>
              progress bar
            </p>
          </div>
          <div className="chapter-info">
            <p>CURRENT CHAPTER</p>
            <p>CHAPTER :19</p>
            <button className="progress-button" type="submit">UPDATE PROGRESS</button>
          </div>

        </section>
      ))}
    </>
  );
}
