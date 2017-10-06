import React from 'react';
import { withRouter } from 'react-router-dom'


export const SearchButton = withRouter(({ history}) => (
    <button
        type="submit" className="search-button"
        onClick={() => {
        console.log(this.refs)
       // let searchQuery = this.refs.searchInput.getDOMNode().value
        history.push('/search'+ searchQuery) }}
    >
        Search
    </button>

))

