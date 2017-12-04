import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { searchReducer } from './reducers/store';

export default (initialState) => {
    const rootReducer = combineReducers({searchReducer});
    const store = createStore (rootReducer, initialState, applyMiddleware(thunkMiddleware));
    return store;
};