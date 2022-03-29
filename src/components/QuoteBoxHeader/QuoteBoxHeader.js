import React from 'react'
import './QuoteBoxHeader.css'

export default function QuoteBoxHeader() {
  return (
    <div className='header'> 
        <div className='icons'>
        <i className='bx bxs-circle bxs-circle1'></i>
        <i className='bx bxs-circle bxs-circle2'></i>
        <i className='bx bxs-circle bxs-circle3'></i>
        </div>
        <h3>Quote Generator</h3>
        <div>
            created by: <a target="_blank" href="https://luisrioscode.netlify.app/"  rel="noreferrer">luisrioscode</a>
        </div>
    </div>
  )
}
