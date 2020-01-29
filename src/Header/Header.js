import React from 'react';
import './Header.css';
import HeaderOptions from './HeaderOptions'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">DEMO Streaming</h1>
            <HeaderOptions />
        </header>
    )
}

export default Header
