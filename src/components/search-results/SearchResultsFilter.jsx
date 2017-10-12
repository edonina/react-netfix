import React from 'react';


/*export class SearchResultsFilter extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="search-results-filter">
                <span>sort by:</span>
                <button className="filter-btn" onClick={this.props.toggleSearchBy('title')}>release date</button>
                <button className="filter-btn" onClick={this.props.toggleSearchBy('director')}>rating</button>
            </div>
        )
    }
}*/



export const SearchResultsFilter = ({toggleSearchBy}) => (
        <div className="search-results-filter">
            <span>sort by:</span>
            <button className="filter-btn" onClick={toggleSearchBy('title')}>release date</button>
            <button className="filter-btn" onClick={toggleSearchBy('director')}>rating</button>
        </div>
);

