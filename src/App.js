import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Routes, Route, NavLink as Link,
} from 'react-router-dom';
import icon from './icons/Bookstore CMS.png';
import Books from './components/Books';
import Categories from './components/Categories';

const changeClass = (event) => {
  event.target.toggleClass('active');
};
const App = () => (
  <Router>
    <div className="Bookstore-CMS">
      <div className="panel-bg">
        <nav className="navHeader">
          <h1>BookStore CMS</h1>
          <ul className="menu">
            <li><Link className="nav-link" onClick={changeClass} to="/">BOOKS</Link></li>
            <li><Link className="nav-link" onClick={changeClass} to="/categories">CATEGORIES</Link></li>
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
