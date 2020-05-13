import React from 'react'
import './Footer.sass'

const Footer = ({ nextColors, prevColors, disabledNext, disabledPrev }) => {
    return (
        <div className='footer'>
            <button onClick={prevColors} className='navigationButtons' disabled={disabledPrev}>
                <div className="arrow-left"></div>
                <span>Previous</span>
            </button>
            <button onClick={nextColors} className='navigationButtons' disabled={disabledNext}>
                <span >Next</span>
                <div className="arrow-right"></div>
            </button>
        </div>
    )
}

export default Footer
