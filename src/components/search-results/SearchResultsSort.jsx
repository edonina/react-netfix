import React from 'react';
import { store } from '../../reducers/store';


export const SearchResultsSort = () => {
    const toggleSortBy = (param) => {
        store.dispatch({
            state: store.getState(),
            sortBy: param,
            type: 'UPDATE_SORT_BY'
        });
        console.log(store.getState());
    }

    return (
        <div className="search-results-filter">
            <span>sort by:</span>
            <button className="filter-btn" onClick={()=>{toggleSortBy('release_date')}}>release date</button>
            <button className="filter-btn" onClick={()=>{toggleSortBy('popularity')}}>rating</button>
        </div>
    )
};