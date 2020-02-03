import React from 'react'
import './Tile.css'
import placeholderImg from '../../assets/placeholder.png'

const Tile = ({ tileType }) => {
    return (
        <div className="media-tile-container">
            <div className="media-tile">
                <div className="tile-img-container">
                    <img src={placeholderImg} className="tile-img" />
                </div>
                <div className="tile-label">
                    <h3>{tileType}</h3>
                </div>
            </div>
            {/* <div>{tileType}</div> <-----In the mockup, they had this caption, but aesthetically not worth it*/} 
        </div>
    )
}

export default Tile
