import React from 'react'
import './QuoteBox.css'
import QuoteBoxHeader from '../QuoteBoxHeader/QuoteBoxHeader'

export default function QuoteWindow({quote, author, handle}) {
  return (
    <div className='QuoteWindow'>
        <QuoteBoxHeader className="QuoteHeader"/>
        <p className='QuoteText'>
            {quote}
        </p>
        <h4 className='QuoteAuthor'>-{author}</h4>
        <button className='QuoteButton' onClick={handle}>Click to generate</button>
    </div>
  )
}
