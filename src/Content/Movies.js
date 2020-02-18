import React from 'react'
import './Movies.css'
import { Link } from 'react-router-dom'

const Movies = () => {
    return (
        <div>
            <Link to="/">
                <button>Go back</button>
            </Link>
            <h3>Movies</h3>
        </div>
    )
}

export default Movies
