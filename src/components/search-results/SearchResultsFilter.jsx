import React from 'react';


export class SearchResultsFilter extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div className="search-filter">
                <p>sort by:</p>
                <button>release date</button>
                <button>rating</button>
            </div>
        )
    }
}