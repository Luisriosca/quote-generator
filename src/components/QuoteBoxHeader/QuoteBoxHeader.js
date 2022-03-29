import React from 'react'
import './QuoteBoxHeader.css'

export default function QuoteBoxHeader() {
  return (
    <div className='header'> 
        <div className='icons'>
        <i class='bx bxs-circle bxs-circle1'></i>
        <i class='bx bxs-circle bxs-circle2'></i>
        <i class='bx bxs-circle bxs-circle3'></i>
        </div>
        <div>
            created by: <a target="_blank" href="https://luisrioscode.netlify.app/">luisrioscode</a>
        </div>
    </div>
  )
}
