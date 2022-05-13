import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookStore';

const Book = (props) => {
  const {
    id,
    title,
    author,
    category,
  } = props;
  const dispatch = useDispatch();
  const foo = () => true;
  const handleRemoveBook = (event) => {
    dispatch(removeBook(event.target.id));
  };
  return (
    <section className="bookContainer">
      <div className="book">
        <p className="gender">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
      <ul className="listItems">
        <li><a href="#top" onClick={foo}>Comments</a></li>
        <li><a href="#top" id={id} onClick={handleRemoveBook}>Remove</a></li>
        <li><a href="#top" onClick={foo}>Edit</a></li>
      </ul>
    </section>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
