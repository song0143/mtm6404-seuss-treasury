import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://seussology.info/api/books')  // 使用实际的 API 地址
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Books data:", data);  // 打印获取到的数据
                setBooks(data);
            })
            .catch(error => {
                console.error("Error fetching books:", error);  // 打印错误信息
            });
    }, []);

    return (
        <div>
            <h1>Books</h1>
            <div className="books-grid">
                {books.length === 0 ? (
                    <p>No books available</p>
                ) : (
                    books.map((book) => (
                        <Link key={book.id} to={`/books/${book.id}`}>
                            <img src={book.coverImage} alt={book.title} />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}

export default Books;
