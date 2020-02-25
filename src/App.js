import React from 'react'

//Styles for whole app
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

//Function to help sort alphanumerically
import sortMediaObjectAlphanumerically from './helpers/sortMediaObjectAlphanumerically'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            library: [],
            movies: [],
            series: [],
        }

        this.getFeedData = this.getFeedData.bind(this)
    }

    getFeedData() {
        fetch('/feed')
            .then(res => res.json())
            .then(({ entries }) => {
                return entries
            })
            .then(streamData => {
                this.setState({
                    library: streamData,
                })

                return streamData
            })
    }

    componentDidMount() {
        this.getFeedData()
    }

    render() {
        const dataForSeries = this.state.library
            .filter(
                mediaObject =>
                    mediaObject.releaseYear >= 2010 &&
                    mediaObject.programType === 'series'
            )
            .slice(0, 21)
            .sort(sortMediaObjectAlphanumerically)

        const dataForMovies = this.state.library
            .filter(
                mediaObject =>
                    mediaObject.releaseYear >= 2010 &&
                    mediaObject.programType === 'movie'
            )
            .slice(0, 21)
            .sort(sortMediaObjectAlphanumerically)

        return (
            <div className="app-container">
                <Router>
                    <Header />
                    <PageHeader />
                    <main className="content">
                        <Switch>
                            <Route exact path="/">
                                <MediaTiles />
                            </Route>
                            <Route path="/movies">
                                <Movies movies={dataForMovies} />
                            </Route>
                            <Route path="/series">
                                <Series series={dataForSeries} />
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
