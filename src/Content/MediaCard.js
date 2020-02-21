import React from 'react'
import './MediaCard.css'

const MediaCard = ({ title, posterPath }) => {
    
    return (
        <div className="media-card-container">
            <img
                src={posterPath}
                className="media-card-image"
            />
            <p className="title">{title}</p>
        </div>
    )
}

export default MediaCard
