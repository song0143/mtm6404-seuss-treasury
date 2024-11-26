import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Books from './pages/Books';  // 需要创建
import BookDetails from './pages/BookDetails';  // 需要创建
import Quotes from './pages/Quotes';  // 需要创建

function App() {
  return (
    <Router>
      <nav>
        <Link to="/books">Books</Link> | <Link to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
