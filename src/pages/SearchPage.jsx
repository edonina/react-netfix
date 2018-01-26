import React from 'react';
import * as s from './pages.scss';
import { VideoList } from '../components/video-list/VideoList.jsx';
import { SearchField } from '../components/search-field/SearchField.jsx';
/*import { connect } from 'react-redux';
const mapStateToProps = (state)=> {
    return {
        // todos: getfdzffz()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleSortBy: (param) => {
            dispatch({
                state: store.getState(),
                sortBy: param,
                type: 'UPDATE_SORT_BY'
            });
        }
    }
}
const sortBy = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoList);*/

export const SearchPage = ({toggleSearchBy, state, props}) => {
    console.log('SearchPage',props);
    return (
        <div>
            <SearchField />
            <VideoList props={props}   />
        </div>
    )
}