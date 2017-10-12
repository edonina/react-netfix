import React from 'react';


export const SearchFilter = ({}) =>{
    return (
            <div className="search-filter">
                <p>Search by:</p>
                <button className="filter-btn" >Title</button>
                <button className="filter-btn">Director</button>
            </div>
    )
}