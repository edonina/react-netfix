import React from 'react';


export class SearchFilter extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="search-filter">
                <p>Search by:</p>
                <button className="filter-btn" onClick={this.props.toggleSearchField('title')}>Title</button>
                <button className="filter-btn" onClick={this.props.toggleSearchField('director')}>Director</button>
            </div>
        )
    }
}