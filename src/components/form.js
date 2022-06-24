import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { postBook } from '../redux/books/books';

const Addbook = () => {
  const initialBook = {
    item_id: '',
    title: '',
    author: '',
    category: '',
  };
  const [bookState, setBookState] = useState(initialBook);

  const dispatch = useDispatch();

  const OnChange = (event) => {
    const { name, value } = event.target;
    setBookState({ ...bookState, [name]: value });
  };

  const Submit = () => {
    const book = { ...bookState, item_id: uuid() };
    dispatch(postBook(book));
    setBookState(initialBook);
  };
  return (
    <div>
      <span>ADD NEW BOOK</span>
      <form>
        <input
          type="text"
          name="title"
          value={bookState.title}
          placeholder="Book Title"
          onChange={OnChange}
        />
        <input
          type="text"
          name="author"
          value={bookState.author}
          placeholder="Author"
          onChange={OnChange}
        />
        <select
          placeholder="categories"
          name="category"
          value={bookState.category}
          onChange={OnChange}
          required
        >
          <option value="">Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Classics">Classics</option>
          <option value="Cookbooks">Cookbooks</option>
          <option value="Detective and Mystery">Detective</option>
          <option value="Romance">Romance</option>
        </select>
        <button type="button" onClick={Submit}>
          Add book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
