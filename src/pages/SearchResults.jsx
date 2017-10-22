import React from 'react';
import * as s from './pages.scss';
import { VideoList } from '../components/video-list/VideoList.jsx';
import { SearchField } from '../components/search-field/SearchField.jsx';
import { SearchResultsOptions } from '../components/search-results/SearchResultsOptions.jsx';

export const SearchResults = ({handleChange, toggleSearchBy, toggleSortBy, state, props}) => {
        console.log("SearchResults",props);
        return (
            <div>
                <SearchField handleChange={handleChange}
                             toggleSearchBy={toggleSearchBy}
                             inputValue={state.value}/>

                <SearchResultsOptions toggleSortBy={toggleSortBy} props={props} />
                <VideoList  props={props} />
            </div>
        )
    }
