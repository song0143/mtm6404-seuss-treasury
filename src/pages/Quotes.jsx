import React, { useEffect, useState } from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/seuss/quotes?limit=10')  // 替换为实际的 API 地址
            .then(response => response.json())
            .then(data => setQuotes(data));
    }, []);

    return (
        <div>
            <h1>Quotes</h1>
            <ul>
                {quotes.map((quote, index) => (
                    <li key={index}>{quote.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Quotes;
