import {CopyToClipboard} from 'react-copy-to-clipboard';

import React, {useState} from 'react'
import './Cards.sass'

const Cards = ({year, hex, colorName, pantone}) => {
    const [copied, setCopied] = useState(false)

    const startTimeOut = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    }

    return (
        <CopyToClipboard text={hex} onCopy={() => startTimeOut()}>
            <div style={{backgroundColor: hex}} className='card'>
                <div className='textCard'>
                    <p className='year'>{year}</p>
                    {copied ? <p className='middleText copied'>Copied!</p> : <div className='middleText'><p>{colorName}</p><p>{hex}</p></div>}
                    <p className='pantone'>{pantone}</p>  
                </div>
            </div>
        </CopyToClipboard>
    )
}

export default Cards
