import React from 'react';
import './Header.css';
import logo from '../../images/logo/1-removebg-preview.png';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <div className="header">
            <div>
                <NavLink className="brand" to="/home"><img src={logo} alt="logo" /></NavLink>
            </div>
            <div className="menu">
                <NavLink className="me-5" to="/categories">Category</NavLink>
                <NavLink className="me-5" to="/indian-food">Indian Food</NavLink>
                <NavLink className="me-5" to="/french-food">French Food</NavLink>
            </div>

        </div>
    );
};

export default Header;