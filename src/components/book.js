import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchBooks, deleteBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

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
  const value = 70;
  const chapter = 30;
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
          <section className="progress-container">
            <div className="progress-bar">
              <CircularProgressbar value={value} />
            </div>
            <div className="progress-info">
              <p className="progress-number">
                {value}
                %
              </p>
              <p className="progress-status">Completed</p>
            </div>
          </section>
          <div className="chapter-info">
            <p className="current-chapter">CURRENT CHAPTER</p>
            <p className="chapter-number">
              CHAPTER :
              {' '}
              {chapter}
            </p>
            <button className="progress-button" type="submit">UPDATE PROGRESS</button>
          </div>

        </section>
      ))}
    </>
  );
}
