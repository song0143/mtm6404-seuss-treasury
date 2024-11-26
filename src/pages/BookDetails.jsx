import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://seussology.info/api/books/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Book data:", data);  // 打印书籍详情
                setBook(data);
            })
            .catch(error => {
                console.error("Error fetching book details:", error);
            });
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{book.title}</h1>
            <img src={book.image} alt={book.title} style={{ width: '200px', height: '300px' }} />
            <p>{book.description}</p>
            <p><strong>Year Published:</strong> {book.year_published}</p>
        </div>
    );
}

export default BookDetails;
