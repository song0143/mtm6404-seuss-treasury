import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://api.example.com/seuss/books/${id}`)  // 替换为实际 API 地址
            .then(response => response.json())
            .then(data => setBook(data));
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.coverImage} alt={book.title} />
            <p>{book.description}</p>
        </div>
    );
}

export default BookDetails;
