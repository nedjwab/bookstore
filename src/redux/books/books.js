const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

// Actions

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const deleteBook = () => ({
  type: DELETE_BOOK,
});


let books=[
    bookOne = {
        title:' Rich dad poor dad',
        author:'Robert Kiyosaki'
    },

    bookTwo = {
        title:'Atomic habits',
        author:'James Clear'
    },

    bookThree = {
        title:'The richest man in babylon',
        author:'George Samuel Clason'
    }

]

// Reducer
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'DELETE_BOOK':
      return [...state.filter((book) => book !== action.payload)];
    default: return state;
  }
};

export default bookReducer;
