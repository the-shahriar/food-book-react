import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = (props) => {
    const { strMeal, strMealThumb } = props.result;
    return (
        <div className="results">
            <img className="meal-img" src={strMealThumb} alt="" />
            <Link to="/"><h4 className="mt-3">{strMeal}</h4></Link>
        </div>
    );
};

export default SearchResult;