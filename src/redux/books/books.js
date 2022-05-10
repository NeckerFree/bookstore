// books.js
const booksCollection = [];
// Actions
const LOAD = 'LOAD';
const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';

// Reducer
export default function booksReducer(state = booksCollection, action) {
  switch (action.type) {
    case LOAD:
      return [...state];
    case CREATE:
      return [...state, action.book];
    case UPDATE: {
      const existingBook = state.find((book) => book.id === action.id);
      if (existingBook) {
        existingBook.title = action.title;
        existingBook.author = action.author;
      }
      return [...state];
    }
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: LOAD };
}

export function createBook(book) {
  return { type: CREATE, book };
}

export function updateBook(book) {
  return { type: UPDATE, book };
}

export function removeBook(id) {
  return { type: REMOVE, id };
}
