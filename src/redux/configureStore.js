import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import statusReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  status: statusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
