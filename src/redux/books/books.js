const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DELETE_BOOK = 'react-bookstore/books/DELETE_BOOK';

const url='https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const identifier='2esARPzzJhTQnTpX7VBI';

const books = [
  {
    id: 1,
    title: ' Rich dad poor dad',
    author: 'Robert Kiyosaki',
  },

  {
    id: 2,
    title: 'Atomic habits',
    author: 'James Clear',
  },

  {
    id: 3,
    title: 'The richest man in babylon',
    author: 'George Samuel Clason',
  },

];

export default function booksReducer(state = books, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat(action.payload);
    case DELETE_BOOK:
      return [...state.filter((book) => (book.id !== action.payload))];
    default:
      return state;
  }
}

export function addBook(book) {
  return { type: ADD_BOOK, payload: book };
}

export function deleteBook(id) {
  return { type: DELETE_BOOK, payload: id };
}
