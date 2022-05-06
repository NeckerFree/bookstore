import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

const Book = (props) => {
  const { title, author } = props;
  const foo = () => true;
  return (
    <section className="bookContainer">
      <div className="book">
        <p className="gender">Gender</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
      </div>
      <ul className="listItems">
        <li><a href="#top" onClick={foo}>Comments</a></li>
        <li><a href="#top" onClick={foo}>Remove</a></li>
        <li><a href="#top" onClick={foo}>Edit</a></li>
      </ul>
    </section>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
