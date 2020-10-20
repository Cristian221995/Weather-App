import React from 'react';
import './App.css';
import Footer from './footer';
import Navbar from './navbar';
import WeatherCard from './weatherCard';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <div className="App-container">
        <WeatherCard/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
