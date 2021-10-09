import React from 'react';
import './IndianDish.css';

const IndianDish = (props) => {
    const { strMeal, strMealThumb } = props.dish;
    return (
        <div className="foods">
            <img src={strMealThumb} alt="menu-img" />
            <h4 className="text-white text-center mt-2">{strMeal}</h4>
        </div>
    );
};

export default IndianDish;