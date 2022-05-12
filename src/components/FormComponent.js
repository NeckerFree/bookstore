import React, { useState } from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(createBook(title, author));
    event.target.parentNode.reset();
  };
  return (
    <div className="formContent">
      <form>
        <p>ADD NEW BOOK</p>
        <input
          id="inputTitle"
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
          maxLength="100"
          required
        />
        <input
          id="inputAuthor"
          type="text"
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
          maxLength="100"
          required
        />
        {/* <select name="category" id="category">
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
      </select> */}
        <input id="submit" type="submit" onClick={handleAddBook} value="Add Book" />
      </form>
    </div>
  );
};

export default FormComponent;
