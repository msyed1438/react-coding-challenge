import React from 'react'
import './SocialLinks.css'

import facebookSocialLink from '../../assets/social/facebook-white.svg'
import instagramSocialLink from '../../assets/social/instagram-white.svg'
import twitterSocialLink from '../../assets/social/twitter-white.svg'

const SocialLinks = () => {
    return (
        <div className="social-links-container">
            <div className="social-link-wrapper img1">
                <img className="social-link" src={facebookSocialLink} />
            </div>
            <div className="social-link-wrapper img2">
                <img className="social-link" src={instagramSocialLink} />
            </div>
            <div className="social-link-wrapper img3">
                <img className="social-link" src={twitterSocialLink} />
            </div>
        </div>
    )
}

export default SocialLinks
