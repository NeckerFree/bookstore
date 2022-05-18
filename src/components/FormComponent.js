import React, { useState } from 'react';
import '../index.css';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/bookStore';

const FormComponent = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const handleAddBook = (event) => {
    event.preventDefault();
    dispatch(createBook(title, author, 'Not defined'));
    event.target.reset();
  };
  return (
    <div className="formContent">
      <form onSubmit={handleAddBook}>
        <p className="form-title">ADD NEW BOOK</p>
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
        <select name="category" id="category">
          <option value="default">Default Category</option>
          <option value="notDefined">Not Defined</option>
        </select>
        <input id="submit" type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default FormComponent;
