import React from 'react'
import './Header.sass'

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' alt='logo of Red Fox Media' src={require('../img/logo.png')} />
            <span className='slash'>/</span>
            <p className='textHeader'>Our colors</p>
        </div>
    )
}

export default Header
