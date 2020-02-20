import React from 'react'
import './MediaCard.css'

const MediaCard = () => {
    return (
        <div className="media-card-container">
            <img
                src="https://streamcoimg-a.akamaihd.net/000/175/7/1757-PosterArt-fc0e2a5b18d4a662717f3cbb1827871d.jpg"
                className="media-card-image"
            />
            <p className="title">Better Call Saul</p>
        </div>
    )
}

export default MediaCard
