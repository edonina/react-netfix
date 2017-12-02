import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

const initialState = {
    value: '',
    searchBy: 'title',
    sortBy: 'release_date',
    videoList: []
};

const searchReducer = (state : initialState, action) => {
    switch (action.type) {
        case 'UPDATE_VIDEO_LIST':
            return {...state, videoList: action.videoList};

        case 'UPDATE_SORT_BY':
            return {...state, sortBy: action.sortBy};

        case 'UPDATE_SEARCH_BY':
            return {...state,  searchBy: action.searchBy};

        case 'UPDATE_SEARCH_QUERY':
            return {...state,  value: action.value};

        default :
            return state;
    }
};

const videoApp = combineReducers({
    searchReducer,
    form
});

export const store = createStore(searchReducer);

