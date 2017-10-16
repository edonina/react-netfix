import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

import { Mainpage } from './pages/main/Mainpage';
import { Videopage } from './pages/video/Videopage';
import { VideoList } from './components/video-list/VideoList';
import { VideoFull } from './components/video-full/VideoFull';
import { EmptyResults } from './components/empty-results/EmptyResults';
import { SearchResults } from './components/search-results/SearchResults';

const render = () => {
    ReactDom.render((
        <Router>
            <App>

                <Switch>

                    <Route exact path="/" component={Mainpage}/>
                    <Route path="/search" component={Mainpage} />

                    <Route path="/video">
                        <Videopage>
                            <Switch>
                                <Route exact path="/video" component={VideoList}/>
                                <Route path="/video/:id" component={VideoFull}/>
                            </Switch>
                        </Videopage>
                    </Route>

                    <Route path="*" component={EmptyResults}/>

                </Switch>
            </App>
        </Router>
    ), document.getElementById('app'));
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
