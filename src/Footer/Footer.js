import React from 'react'
import './Footer.css'
import SocialLinks from './SocialLinks'
import StoreLinks from './StoreLinks.js'

const Footer = () => {
    return (
        <footer className="footer-container">
            <div>
                Home | Terms & Conditions | Privacy Policy | Collection
                Statement | Help | Manage Account
            </div>
            <div> Copyright Ⓒ 2016 DEMO Streaming. All rights reserved. </div>
            <div className="social-app-links">
                <SocialLinks />
                <StoreLinks />
            </div>
        </footer>
    )
}

export default Footer
