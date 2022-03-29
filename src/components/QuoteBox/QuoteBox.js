import React from 'react'
import './QuoteBox.css'

export default function QuoteWindow({quote, author, handle}) {
  return (
    <div className='QuoteWindow'>
        <p className='QuoteText'>
            {quote}
        </p>
        <h4 className='QuoteAuthor'>-{author}</h4>
        <button className='QuoteButton' onClick={handle}>Click to generate</button>
    </div>
  )
}
