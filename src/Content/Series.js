import React from 'react'
import './Series.css'
import { Link } from 'react-router-dom'
import BackButton from './BackButton'

const Series = ({ series }) => {
    return (
        <div className="series-container">
            <Link to="/">
                <BackButton />
            </Link>
            <div className="series">Series</div>
        </div>
    )
}

export default Series
