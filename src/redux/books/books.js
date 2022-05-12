import booksCollection from './booksCollection';

const GET_BOOK = 'bookstore/books/GET_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const UPDATE_BOOK = 'bookstore/books/UPDATE_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export default function booksReducer(state = booksCollection, action) {
  switch (action.type) {
    case GET_BOOK:
      return [...state];
    case ADD_BOOK: {
      const { title, author } = action;
      const book = { id: state.length + 1, title, author };
      return [...state, book];
    }
    case UPDATE_BOOK: {
      const copyState = [...state];
      const existingBook = copyState.find((b) => b.id === action.book.id);
      if (existingBook) {
        existingBook.title = action.book.title;
        existingBook.author = action.book.author;
      }
      return copyState;
    }
    case REMOVE_BOOK: {
      const index = state.findIndex((book) => book.id === parseInt(action.id, 10));
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: GET_BOOK };
}

export function createBook(title, author) {
  return { type: ADD_BOOK, title, author };
}

export function updateBook(book) {
  return { type: UPDATE_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
