import React from 'react'
import './App.css'

import Header from './Header/Header'
import PageHeader from './PageHeader/PageHeader'
import MediaTiles from './Tile/MediaTiles'
import Footer from './Footer/Footer'
import { entries } from '../feed/sample.json'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            library: [],
        }
    }

    componentDidMount() {
        this.setState({
            library: entries,
        })
    }

    render() {
        return (
            <div className="app-container">
                <Header />
                <PageHeader />
                <MediaTiles />
                <Footer />
            </div>
        )
    }
}

export default App
