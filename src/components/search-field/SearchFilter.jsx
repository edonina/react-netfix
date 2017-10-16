import React from 'react';


export const SearchFilter = ({toggleSearchBy}) =>{
    return (
            <div className="search-filter">
                <p>Search by:</p>
                <button className="filter-btn" onClick={()=>{toggleSearchBy('title')}} >Title</button>
                <button className="filter-btn" onClick={()=>{toggleSearchBy('director')}}>Director</button>
            </div>
    )
}