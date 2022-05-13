import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const middleWare = applyMiddleware(thunk, logger);
const store = configureStore(
  {
    reducer: { booksReducer, categoriesReducer },
    middleWare,
  },
);
export default store;
