import React from 'react';
import * as s from './pages.scss';
import { VideoList } from '../components/video-list/VideoList.jsx';
import { SearchField } from '../components/search-field/SearchField.jsx';

export const SearchPage = ({toggleSearchBy, state, props}) => {
    console.log('SearchPage',props);
    return (
        <div>
            <SearchField />
            <VideoList props={props}   />
        </div>
    )
}