// import React from 'react';
import React, { useEffect } from 'react';
import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import FormComponent from './FormComponent';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const booksCollection = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadBooks());
  }, []);
  return (
    <section className="booksContainer">
      <section className="booksSection">
        {booksCollection.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </section>
      <hr />
      <FormComponent />
    </section>
  );
};
export default Books;
