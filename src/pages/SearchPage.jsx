import React from 'react';
import * as s from './pages.scss';
import { VideoList } from '../components/video-list/VideoList.jsx';
import { SearchField } from '../components/search-field/SearchField.jsx';

export const SearchPage = ({handleChange, toggleSearchBy, state, props}) => {
    console.log(props);
    return (
        <div>
            <SearchField handleChange={handleChange}
                         toggleSearchBy={toggleSearchBy}
                         inputValue={state.value}/>
            <VideoList  props={props} />
        </div>
    )
}