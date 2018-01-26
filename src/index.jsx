import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import configureStore from './configureStore';

const store = configureStore( window.PRELOADED_STATE);
console.log("77777777:",store.getState());
delete window.PRELOADED_STATE;

const render = () => {
    const context = {};
    ReactDOM.hydrate((
        <Provider store={store}>
            <Router context={context}>
             <App />
             </Router>
        </Provider>
    ), document.getElementById('app'));
}

render();

 if (module.hot) {
    module.hot.accept('./App', render);
 }