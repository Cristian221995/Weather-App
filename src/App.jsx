import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="App-container">
          <WeatherDetails />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
