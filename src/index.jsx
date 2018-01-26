import React from 'react';
/*import { AppContainer } from 'react-hot-loader';*/
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

import { SearchResults } from './pages/SearchResults.jsx';
import { SearchPage } from './pages/SearchPage.jsx';

import { FullVideoPage } from './pages/FullVideoPage';
import { VideoList } from './components/video-list/VideoList';

import { EmptyResults } from './components/empty-results/EmptyResults';


const render = () => {
    ReactDom.render((
        <Router>
            <App>

                <Switch>


                    <Route exact path='/' render={(props) => (
                        <SearchPage props={props}  />
                    )}/>

                    <Route exact path='/search' render={(props) => (
                        <SearchPage props={props} />
                    )}/>

                    <Route path="/search/:query" render={(props) => (
                        <SearchResults props={props}  />
                    )}/>

                    <Route exact path='/video' render={(props) => (
                        <VideoList props={props} />
                    )}/>

                    <Route path="/video/:id" component={FullVideoPage} />




                    <Route path="*" component={EmptyResults}/>

                </Switch>
            </App>
        </Router>
    ), document.getElementById('app'));
}

render();
/*

 if (module.hot) {
 module.hot.accept('./App', render);
 }
 */
