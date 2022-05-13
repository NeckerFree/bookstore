import { v4 as uniqueID } from 'uuid';
import { ADD_BOOK, GET_BOOKS, REMOVE_BOOK } from './types';
import ApiServices from '../../dataAccess/apiServices';

export const createBook = (title, author, category) => async (dispatch) => {
  const id = uniqueID();
  const bookCreate = {
    item_id: id,
    title,
    author,
    category,
  };
  const book = {
    itemId: id,
    title,
    author,
    category,
  };
  await ApiServices.createBook(bookCreate);
  dispatch({
    type: ADD_BOOK,
    payload: book,
  });
};

export const getAllBooks = () => async (dispatch) => {
  const response = await ApiServices.getAllBooks();
  const books = [];
  const entries = Object.entries(response.data);
  entries.forEach((inputEntry) => {
    const book = Object.assign({ itemId: inputEntry[0] }, ...inputEntry[1]);
    books.push(book);
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

export const removeBook = (id) => async (dispatch) => {
  await ApiServices.removeBook(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};
