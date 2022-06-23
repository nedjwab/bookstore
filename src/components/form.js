import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBookEvent = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        id: Math.random() * 100,
        title,
        author,
      }),
    );
    setTitle('');
    setAuthor('');
  };

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const authorInput = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <h2>Add A Book</h2>
      <form onSubmit={addBookEvent}>
        <input
          type="text"
          placeholder="Enter book title"
          value={title}
          onChange={titleInput}
        />
        <input
          type="text"
          placeholder="Enter book author"
          value={author}
          onChange={authorInput}
        />
        <button type="submit">Add Book </button>
      </form>
    </>
  );
}
