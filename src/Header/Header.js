import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <h1 className="header-title">DEMO Streaming</h1>
            </Link>

            <HeaderOptions />
        </header>
    )
}

export default Header
