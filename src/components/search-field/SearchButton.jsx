import React from 'react';
import { withRouter } from 'react-router-dom'


export const SearchButton = withRouter(({history, ...props}) => (
    <button
        type="submit" className="search-button"
        onClick={() => {

        console.log(props);
       history.push('/search/'+ props.inputValue)
        }}
    >
        Search
    </button>

))

