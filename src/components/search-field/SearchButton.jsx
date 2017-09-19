import React from 'react';


export class SearchButton extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <button type="submit" className="search-button">Search</button>
        )
    }
}