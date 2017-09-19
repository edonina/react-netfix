import React from 'react';


export class SearchResultsFilter extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="search-results-filter">
                <span>sort by:</span>
                <button className="filter-btn">release date</button>
                <button className="filter-btn">rating</button>
            </div>
        )
    }
}