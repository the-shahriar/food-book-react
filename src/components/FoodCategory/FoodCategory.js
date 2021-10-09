import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import './FoodCategory.css';

const FoodCategory = () => {
    const url = 'https://themealdb.com/api/json/v1/1/categories.php';
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.categories))
    }, [])

    return (

        <div className="food-container">
            <h2>Popular Categories</h2>
            <div className="food-category">
                {
                    meals.map(meal => <CategoryDetail
                        key={meal.idCategory}
                        meal={meal}
                    ></CategoryDetail>)
                }
            </div>
        </div>
    );
};

export default FoodCategory;