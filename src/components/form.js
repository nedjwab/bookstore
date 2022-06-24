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
    <section className="Form">
      <span className="form-title">ADD NEW BOOK</span>
      <form>
        <input
          type="text"
          name="title"
          value={bookState.title}
          placeholder="Enter Book Title"
          onChange={OnChange}
        />
        <input
          type="text"
          name="author"
          value={bookState.author}
          placeholder="Enter Author"
          onChange={OnChange}
        />
        <select
          className="cat"
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
        <button className="Add-button" type="button" onClick={Submit}>
          Add book
        </button>
      </form>
    </section>
  );
};

export default Addbook;
