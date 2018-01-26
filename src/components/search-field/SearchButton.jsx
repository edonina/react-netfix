import React from 'react';
import { withRouter } from 'react-router-dom'
import { store } from '../../reducers/store';


export const SearchButton = withRouter(({history}) => (
    <button
        type="submit" className="search-button"
        onClick={() => {
            history.push('/search/'+ store.getState().value);
        }}
    >
        Search
    </button>
))