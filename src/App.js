import React from 'react';
import Header from './Header/Header';
import "./App.css";
import PageHeader from './PageHeader/PageHeader';
import MediaTiles from './Tile/MediaTiles';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Header />
                <PageHeader />
                <MediaTiles />
            </div>
        )
    }
}

export default App;
