import React from 'react'
import './Footer.sass'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='navigationDivs previousDiv'>
                <div className="arrow-left"></div>
                <span>Previous</span>
            </div>
            <div className='navigationDivs nextDiv'>
                <span>Next</span>
                <div className="arrow-right"></div>
            </div>
        </div>
    )
}

export default Footer
