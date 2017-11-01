import React from 'react';
import * as s from './pages.scss';
import { VideoList } from '../components/video-list/VideoList.jsx';
import { SearchField } from '../components/search-field/SearchField.jsx';
import { SearchResultsOptions } from '../components/search-results/SearchResultsOptions.jsx';


export const SearchResults = ({props}) => {
        console.log("SearchResults---", props.match.params);
            let query = props.match.params.query || '';
        return (
            <div>
                <SearchField />
                <SearchResultsOptions />
                <VideoList props={props} />
            </div>
        )
    }
