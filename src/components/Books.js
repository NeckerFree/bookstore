import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import '../index.css';
import Book from './Book';
import FormComponent from './FormComponent';
import { getAllBooks } from '../redux/books/bookStore';

const Books = () => {
  const booksCollection = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  return (
    <section className="booksContainer">
      <section className="booksSection">
        {booksCollection.map((book) => (
          <Book
            id={book.itemId}
            title={book.title}
            author={book.author}
            category={book.category}
            key={book.title}
          />
        ))}
      </section>
      <hr />
      <FormComponent />
    </section>
  );
};
export default Books;
