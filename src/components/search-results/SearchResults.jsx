import React from 'react';
import * as s from './search-results.scss';
import { SearchResultsCount } from './SearchResultsCount';
import { SearchResultsFilter } from './SearchResultsFilter';
import { SearchResultsList } from './SearchResultsList';

export class SearchResults extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <SearchResultsCount />
                <SearchResultsFilter />
                <SearchResultsList />
            </div>
        )
    }
}