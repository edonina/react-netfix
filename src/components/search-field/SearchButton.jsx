import React from 'react';
import { withRouter } from 'react-router-dom'


export const SearchButton = withRouter(({history, ...props}) => (
    <button
        type="submit" className="search-button"
        onClick={() => {
            history.push('/search/'+ props.inputValue);
            console.log(props);
        }}
    >
        Search
    </button>

))