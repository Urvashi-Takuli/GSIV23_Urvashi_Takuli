import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import MovieDescription from './Screens/MovieDescription';

class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomeScreen/>}/>
                    <Route exact path="/movie-description" element={<MovieDescription/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
