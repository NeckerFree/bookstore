// books.js
const booksCollection = [];
booksCollection.push({ id: 1, title: 'DREAM TOWN', author: 'David Baldacci' });
booksCollection.push({ id: 2, title: 'RUN, ROSE, RUN', author: 'Dolly Parton and James Patterson' });
booksCollection.push({ id: 3, title: 'CITY ON FIRE', author: 'Don Winslow' });
booksCollection.push({ id: 4, title: 'THE GOOD LEFT UNDONE', author: 'Adriana Trigiani' });
booksCollection.push({ id: 5, title: 'SEA OF TRANQUILITY', author: 'Emily St. John Mandel' });

// Actions
const GET_BOOK = 'bookstore/books/GET_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const UPDATE_BOOK = 'bookstore/books/UPDATE_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
export default function booksReducer(state = booksCollection, action) {
  switch (action.type) {
    case GET_BOOK:
      return [...state];
    case ADD_BOOK:
      return [...state, action.book];
    case UPDATE_BOOK: {
      const existingBook = state.find((book) => book.id === action.book.id);
      if (existingBook) {
        existingBook.title = action.book.title;
        existingBook.author = action.book.author;
      }
      return [...state];
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Action Creators
export function loadBooks() {
  return { type: GET_BOOK };
}

export function createBook(book) {
  return { type: ADD_BOOK, book };
}

export function updateBook(book) {
  return { type: UPDATE_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}
