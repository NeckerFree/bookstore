import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import icon from './icons/Bookstore CMS.png';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <div className="Bookstore-CMS">
      <div className="panel-bg">
        <nav className="navHeader">
          <h1>BookStore CMS</h1>
          <ul className="menu">
            <li><Link to="/">BOOKS</Link></li>
            <li><Link to="/categories">CATEGORIES</Link></li>
          </ul>
          <img src={icon} alt="CMS logo" className="iconClass" />
        </nav>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
