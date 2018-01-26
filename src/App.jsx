import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom';

import { AppPage } from './AppPage';

import { SearchResults } from './pages/SearchResults.jsx';
import { SearchPage } from './pages/SearchPage.jsx';
import { FullVideoPage } from './pages/FullVideoPage';
import { VideoList } from './components/video-list/VideoList';
import { EmptyResults } from './components/empty-results/EmptyResults';

import { renderRoutes } from 'react-router-config';
import { routes } from './routes';

export const App = ({routes}) => {
    return (
        <AppPage>
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
        </AppPage>
    )
}