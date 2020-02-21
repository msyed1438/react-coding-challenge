import React from 'react'
import './Movies.css'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'
import MediaCard from './MediaCard'

const Movies = ({ movies }) => {
    return (
        <div className="movies-container">
            <Link to="/">
                <BackButton />
            </Link>
            <div className="movies">
                {movies.map(movie => (
                    <MediaCard />
                ))}
            </div>
        </div>
    )
}

export default Movies
