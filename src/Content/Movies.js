import React from 'react'
import './Movies.css'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'
import MediaCard from './MediaCard'

const Movies = ({ movies }) => {
    console.log('Our movies: ', movies)
    return (
        <div className="movies-container">
            <Link to="/">
                <BackButton />
            </Link>
            <div className="movies">
                {movies.map(movie => {
                    let { title, images } = movie
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

export default Movies
