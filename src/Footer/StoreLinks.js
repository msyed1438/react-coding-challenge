import React from 'react'
import './StoreLinks.css'
import googleStore from '../../assets/store/play-store.svg'
import appStore from '../../assets/store/app-store.svg'
import windowsStore from '../../assets/store/windows-store.svg'


const StoreLinks = () => {
    return (<div className="store-links">
        <img src={googleStore} className="store-icon"/>
        <img src={appStore} className="store-icon"/>
        <img src={windowsStore} className="store-icon"/>
    </div>)
}

export default StoreLinks
