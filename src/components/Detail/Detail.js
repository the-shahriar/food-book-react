import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import Meals from '../Meals/Meals';
import './Detail.css';

const Detail = () => {
    const { nameId } = useParams();
    console.log(nameId);
    const [meals, setMeals] = useState([]);


    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/filter.php?c=${nameId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className="meals-container">
            <h2>Favorite Meal of {nameId}</h2>
            <div className="meals">
                {
                    meals.map(meal => <Meals
                        key={meal.idMeal}
                        meal={meal}
                    ></Meals>)
                }
            </div>
        </div >
    );
};

export default Detail;