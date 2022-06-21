import { combineReducers, createStore } from 'redux';
import statusReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  status: statusReducer,
});

const store = createStore(rootReducer);
export default store;
