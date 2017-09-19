import React from 'react';
import * as s from './search-results.scss';
import { SearchResultsCount } from './SearchResultsCount';
import { SearchResultsFilter } from './SearchResultsFilter';
import { VideoList } from '../video-list/VideoList';

export class SearchResults extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="search-results">
                <SearchResultsFilter />
                <SearchResultsCount />
                <VideoList />
            </div>
        )
    }
}