import React from 'react';


export const SearchResultsSort = ({toggleSortBy, props}) => {
    return (
        <div className="search-results-filter">
            <span>sort by:</span>
            <button className="filter-btn" onClick={()=>{toggleSortBy('date')}}>release date</button>
            <button className="filter-btn" onClick={()=>{toggleSortBy('rating')}}>rating</button>
        </div>
    )
};