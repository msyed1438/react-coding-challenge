import React from 'react'
import './Series.css'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'
import MediaCard from './MediaCard'

const Series = ({ series }) => {
    return (
        <div className="series-container">
            <Link to="/">
                <BackButton />
            </Link>
            <div className="series">
                {series.map(show => {
                    let { title, images } = show
                    const posterPath = images['Poster Art']['url']
                    return (
                        <MediaCard
                            title={title}
                            posterPath={posterPath}
                            key={title}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Series
