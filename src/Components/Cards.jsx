import React from 'react'
import './Cards.sass'

const Cards = ({year, hex, colorName, pantone}) => {
    return (
        <div style={{backgroundColor: hex}} className='card'>
            <span>{year}</span>
            <div>
                <p>{colorName}</p>
                <p>{hex}</p>
            </div>
            <p>{pantone}</p>  
        </div>
    )
}

export default Cards
