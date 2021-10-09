import React, { useEffect, useState } from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './SearchBar.css';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const url = `https://themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setResults(data.meals))
    }, [searchText])

    return (
        <div>
            <div className="main">
                <div className="search-bar">
                    <input onChange={event => setSearchText(event.target.value)} className="search-input" type="text" placeholder="Search your favorite foods" />
                    <button className="search-btn">Search</button>
                </div>

                <div className="overlay">
                    <h1 className="text-white text-center">Find Your Favourite Foods</h1>
                </div>
            </div>
            <div className="search-result">
                {searchText && // conditional rendering
                    results.map(result => <SearchResult
                        key={result.idMeal}
                        result={result}
                    ></SearchResult>)

                }
            </div>
        </div>
    );
};

export default SearchBar;