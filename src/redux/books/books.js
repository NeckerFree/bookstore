import { ADD_BOOK, GET_BOOKS, REMOVE_BOOK } from './types';

const booksCollection = [];
export default function booksReducer(state = booksCollection, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return payload;
    case ADD_BOOK: {
      return [...state, payload];
    }
    case REMOVE_BOOK: {
      const index = state.findIndex((book) => book.itemId === payload);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    default:
      return state;
  }
}
