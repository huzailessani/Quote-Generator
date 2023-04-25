import React, { useState } from 'react'
import quotes from "./quoteData"

const Quote = () => {
    const [quote, setQuote] = useState(quotes[0])
    const change = () => {
        const randomNum = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomNum])
    }
    return (
        <div>
            <div>
                {quote.quote}
            </div>
            <div>
                {quote.author}
            </div>
            <button onClick={change}>Change</button>
        </div>
    )
}

export default Quote