import React from 'react';
import './Meals.css';
const Meals = (props) => {
    const { strMeal, strMealThumb } = props.meal;
    return (

        <div className="meal">
            <img className="meal-img" src={strMealThumb} alt="" />
            <h4>{strMeal.slice(0, 30)}</h4>
        </div>
    );
};

export default Meals;