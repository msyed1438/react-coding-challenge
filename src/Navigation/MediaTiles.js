import React from 'react'
import Tile from './Tile'
import './MediaTiles.css'
import { Switch, Route, Link } from 'react-router-dom'

const MediaTiles = () => {
    return (
        <div className="media-tiles">
            <Link to="/movies">
                <Tile tileType="Movies" />
            </Link>
            <Link to="/series">
                <Tile tileType="Series" />
            </Link>
        </div>
    )
}

export default MediaTiles
