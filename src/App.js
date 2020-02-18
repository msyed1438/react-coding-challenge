import React from 'react'
import './reset.css'
import './styles.css'
import './App.css'

//Components:
import Header from './Header/Header'
import PageHeader from './PageHeader/PageHeader'
import MediaTiles from './Navigation/MediaTiles'
import Footer from './Footer/Footer'

//Data:
import { entries } from '../feed/sample.json'

//Routing:
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            library: [],
        }
    }

    componentDidMount() {
        fetch('../feed/sample.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <div className="app-container">
                <Router>
                    <Header />
                    <PageHeader />
                    <main>
                        <MediaTiles />
                    </main>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default App
