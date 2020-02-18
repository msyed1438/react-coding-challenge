import React from 'react'
import './reset.css'
import './styles.css'
import './App.css'

//Components:
import Header from './Header/Header'
import PageHeader from './PageHeader/PageHeader'
import MediaTiles from './Navigation/MediaTiles'
import Footer from './Footer/Footer'
import Movies from './Content/Movies'
import Series from './Content/Series'

//Data:
import { entries } from '../feed/sample.json'

//Routing:
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
                        <Switch>
                            <Route exact path="/">
                                <MediaTiles />
                            </Route>
                            <Route path="/movies">
                                <Movies />
                            </Route>
                            <Route path="/series">
                                <Series />
                            </Route>
                        </Switch>
                    </main>
                    <Footer />
                </Router>
            </div>
        )
    }
}

export default App
