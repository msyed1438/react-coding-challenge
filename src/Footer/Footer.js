import React from 'react'
import './Footer.css'
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div>Home  |  Terms & Conditions  |  Privacy Policy  |  Collection Statement  |  Help  |  Manage Account </div>
            <div> Copyright Ⓒ 2016 DEMO Streaming. All rights reserved. </div>
            <SocialLinks />
        </footer>
    )
}

export default Footer;