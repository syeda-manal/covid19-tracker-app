
import React from 'react';
import './App.css';
import { Cards, Charts, CountryPicker, AppBar, MainGrid } from './components';

function App() {

    return (
        <div className = "App">
            <AppBar />
            <MainGrid />
            <Cards />
            {/* <CountryPicker /> */}
            <Charts />
        </div>
    );
}

export default App;
