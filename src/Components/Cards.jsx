import React from 'react'
import './Cards.sass'

const Cards = ({year, hex, colorName, pantone}) => {
    return (
        <div style={{backgroundColor: hex}} className='card'>
            <div className='textCard'>
                <p className='year'>{year}</p>
                <div className='middleText'>
                    <p>{colorName}</p>
                    <p>{hex}</p>
                </div>
                <p className='pantone'>{pantone}</p>  
            </div>
        </div>
    )
}

export default Cards
