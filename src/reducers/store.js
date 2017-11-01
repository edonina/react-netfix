import { createStore, combineReducers } from 'redux';


const searchReducer = (state = {value: '', searchBy: 'title', sortBy: 'release_date', videoList: []}, action) => {
    switch (action.type) {
        case 'SORT_BY_DATE' :
            return state + 1;
        case 'SORT_BY_RATING' :
            return state - 1;
        case 'SEARCH_BY_TITLE':
            return state - 1;
        case 'UPDATE_VIDEO_LIST':
            return Object.assign({}, {
                value: state.value,
                searchBy: state.searchBy,
                sortBy: state.sortBy,
                videoList: action.videoList
            });


        case 'UPDATE_SORT_BY':
            return Object.assign({}, {
                value: state.value,
                searchBy: state.searchBy,
                sortBy: action.sortBy,
                videoList: state.videoList
            });

        case 'UPDATE_SEARCH_BY':
            return Object.assign({}, {
                value: state.value,
                searchBy: action.searchBy,
                sortBy: state.sortBy,
                videoList: state.videoList
            });
        case 'UPDATE_SEARCH_QUERY':
            return Object.assign({}, {
                value: action.value,
                searchBy: state.searchBy,
                sortBy: state.sortBy,
                videoList: state.videoList
            });

        default :
            return state;
    }
};

const videoApp = combineReducers({
    searchReducer: searchReducer
});

export const store = createStore(searchReducer);


/*const render = () => {
 document.body.innerText = store.getState();
 }*/
/*
 store.subscribe(  render());
 render();
*/

