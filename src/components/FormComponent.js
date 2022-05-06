import React from 'react';
import '../index.css';

const FormComponent = () => (
  <div className="formContent">
    <form method="get">
      <p>ADD NEW BOOK</p>
      <input id="inputTitle" type="text" placeholder="Book Title" maxLength="50" required />
      <select name="autor" id="autor">
        <option value="autor1">Autor 1</option>
        <option value="autor2">Autor 2</option>
      </select>
      <input id="submit" type="submit" name="addBook" value="Add Book" />
    </form>
  </div>
);

export default FormComponent;
