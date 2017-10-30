import { createStore, combineReducers } from 'redux';


const searchReducer = ( state = {}, action ) => {
    switch (action.type) {
        case 'SORT_BY_DATE' :
            return state + 1;
        case 'SORT_BY_RATING' :
            return state - 1;
        case 'UPDATE_SORT_BY':
            return () => {
                this.setState(Object.assign({}, {
                    value: state.value,
                    searchBy: state.searchBy,
                    sortBy: param
                }));
            }
        case 'SEARCH_BY_TITLE':
            return state - 1;

        case 'SEARCH_BY_DIRECTOR':
            return state - 1;

        case 'UPDATE_SEARCH_BY':
            return () => {
                this.setState(Object.assign({}, {
                    value: state.value,
                    searchBy: param,
                    sortBy: state.sortBy
                }));
            }
        case 'UPDATE_SEARCH_QUERY':
            return state - 1;

        default :
            return state;
    }
};



const videoApp = combineReducers({
    searchReducer : searchReducer
});

export const store = createStore( searchReducer );


//store.dispatch({ type: INCREMENT});
//console.log( store.getState());


/*const render = () => {
    document.body.innerText = store.getState();
}*/
/*
store.subscribe(  render());
render();

document.addEventListener( 'click', (store) => {
    store.dispatch({ type: INCREMENT});
})

export  store;*/

