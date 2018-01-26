import React from 'react';
import {withRouter} from 'react-router-dom';
import { store } from '../../reducers/store';


export const SearchInput = ()=> {
    const handleChange = (event) =>{
        store.dispatch({
            state: store.getState(),
            value: event.target.value,
            type: 'UPDATE_SEARCH_QUERY'
        });
       // console.log('state',store.getState());
    }

    return (
        <div>
            <input type="search"
                   className="search-input"
                   onChange={handleChange}
            />
        </div>
    )
}