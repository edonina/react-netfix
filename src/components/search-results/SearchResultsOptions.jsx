import React from 'react';
import * as s from './search-results.scss';
import { SearchResultsCount } from './SearchResultsCount';
import { SearchResultsSort } from './SearchResultsSort';


export const SearchResultsOptions = ({toggleSortBy, props})=> {
   return (
        <div className="search-results">
            <SearchResultsSort toggleSortBy={toggleSortBy} props={props} />
            <SearchResultsCount />
        </div>
    )
}
