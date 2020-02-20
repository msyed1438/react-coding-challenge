import React from 'react'
import './Series.css'
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

const Series = () => {
    return (
        <div className="series-container">
            <Link to="/">
                <BackButton />
            </Link>
            <h3>Series</h3>
        </div>
    )
}

export default Series