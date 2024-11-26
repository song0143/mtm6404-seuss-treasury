import React, { useEffect, useState } from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('https://seussology.info/api/quotes/random/10')  // 使用实际 API 地址
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Quotes data:", data);  // 打印获取到的名言数据
                setQuotes(data);
            })
            .catch(error => {
                console.error("Error fetching quotes:", error);  // 打印错误信息
            });
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
