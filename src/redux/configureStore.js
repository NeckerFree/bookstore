import { Redux } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = Redux.combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = Redux.createStore(rootReducer);
export default store;
