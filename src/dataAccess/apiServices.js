import apiConnection from './apiConnection';

const APP_ID = 'VIisoI3Ug2BiddYrQGVN';

// get a list of items with its respective books
const getAllBooks = () => apiConnection.get(`/${APP_ID}/books`);

// create a new book for the given item
const createBook = (book) => apiConnection.post(`/${APP_ID}/books`, book);

// remove a book from the bookstore
const removeBook = (id) => apiConnection.delete(`/${APP_ID}/books/${id}`);

const ApiServices = {
  getAllBooks,
  createBook,
  removeBook,
};
export default ApiServices;
