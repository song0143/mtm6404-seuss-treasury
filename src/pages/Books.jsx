import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/seuss/books')  // 替换为 Seussology API 实际的地址
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <div className="books-grid">
                {books.map((book) => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <img src={book.coverImage} alt={book.title} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Books;
