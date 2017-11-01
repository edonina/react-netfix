import React from 'react';
import { store } from '../../reducers/store';


export const SearchFilter = () => {
    const toggleSearchBy = (param) => {
        store.dispatch({
            state: store.getState(),
            searchBy: param,
            type: 'UPDATE_SEARCH_BY'
        });
        console.log(store.getState());
    }

    return (
        <div className="search-filter">
            <p>Search by:</p>
            <button className="filter-btn" onClick={()=>{toggleSearchBy('title')}}>Title</button>
            <button className="filter-btn" onClick={()=>{toggleSearchBy('director')}}>Director</button>
        </div>
    )
}