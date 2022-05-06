import React from 'react';
import '../index.css';
import Book from './Book';
import FormComponent from './FormComponent';

const Books = () => (
  <section className="booksContainer">
    <section className="booksSection">
      <Book id="1" title="Book Title" author="Book Author" />
    </section>
    <hr />
    <FormComponent />
  </section>
);

export default Books;
