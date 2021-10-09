import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryDetail.css'

const CategoryDetail = (props) => {
    const { strCategory, strCategoryThumb } = props.meal;
    return (
        <div className="category">
            <img src={strCategoryThumb} alt="" />
            <Link to={`/category/${strCategory}`}><h4>{strCategory}</h4></Link>
        </div>
    );
};

export default CategoryDetail;