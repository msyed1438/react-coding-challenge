import React from 'react'
import Tile from './Tile'
import './MediaTiles.css'

const MediaTiles = () => {
    return (
        <div className="media-tiles">
            <Tile tileType="Movies" />
            <Tile tileType="Series" />
        </div>
    )
}

export default MediaTiles
