import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://seussology.info/api/books')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Books data:", data);
                setBooks(data);
            })
            .catch(error => {
                console.error("Error fetching books:", error);
            });
    }, []);

    return (
        <div className="page-container">
            <h1>Books</h1>
            <div className="books-grid">
                {books.length === 0 ? (
                    <p>No books available</p>
                ) : (
                    books.map((book) => (
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <img src={book.image} alt={book.title} style={{ width: '150px', height: '200px' }} />
                            <p>{book.title}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default Books;
