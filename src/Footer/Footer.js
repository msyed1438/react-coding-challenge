import React from 'react'
import './Footer.css'
import SocialLinks from './SocialLinks'
import StoreLinks from './StoreLinks.js'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-links">
                <span>Home</span> | <span>Terms & Conditions</span> |{' '}
                <span>Privacy Policy</span> | <span>Collection Statement</span>{' '}
                | Help | Manage Account
            </div>
            <div className="footer-copyright">
                {' '}
                Copyright Ⓒ 2016 DEMO Streaming. All rights reserved.{' '}
            </div>
            <div className="social-app-links">
                <SocialLinks />
                <StoreLinks />
            </div>
        </footer>
    )
}

export default Footer
