import React, { useEffect, useState } from 'react';
import IndianDish from '../IndianDish/IndianDish';
import './Indian.css';

const Indian = () => {
    const [dishes, setDishes] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
            .then(res => res.json())
            .then(data => setDishes(data.meals))
    }, [])
    return (

        <div className="food-container">
            <h2>Popular Indian Foods</h2>
            <div className="indian-food">
                {
                    dishes.map(dish => <IndianDish
                        key={dish.idMeal}
                        dish={dish}
                    ></IndianDish>)
                }
            </div>
        </div>
    );
};

export default Indian;