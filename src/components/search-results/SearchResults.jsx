import React from 'react';
import * as s from './search-results.scss';
import { SearchResultsCount } from './SearchResultsCount';
import { SearchResultsSort } from './SearchResultsSort';
import { VideoList } from '../video-list/VideoList';


export const SearchResults = ({toggleSortBy})=> {
    return (
        <div className="search-results">
            <SearchResultsSort toggleSortBy={toggleSortBy}/>
            <SearchResultsCount />
        </div>
    )
}
