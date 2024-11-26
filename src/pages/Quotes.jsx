import React, { useEffect, useState } from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Quotes data:", data);
                setQuotes(data);
            })
            .catch(error => {
                console.error("Error fetching quotes:", error);
            });
    }, []);

    return (
        <div className="page-container">
            <h1>Quotes</h1>
            <div className="quotes-container">
                {quotes.map((quote, index) => (
                    <div key={index} className="quote-card">
                        <p>{quote.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quotes;
