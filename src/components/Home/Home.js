import React from 'react';
import FoodCategory from '../FoodCategory/FoodCategory';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css';

const Home = () => {

    return (
        <div className="hero-section">
            <SearchBar></SearchBar>
            <FoodCategory></FoodCategory>
        </div>
    );
};

export default Home;