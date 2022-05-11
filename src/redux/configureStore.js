import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore(
  {
    reducer: { booksReducer, categoriesReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  },
);
export default store;
