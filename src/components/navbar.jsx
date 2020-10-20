import React from 'react';
import { Sun, Cloud } from 'react-feather';

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand h1"><Cloud /><Sun className="mr-2"/>Weather App</span>
    </nav>
)

export default Navbar