import React from 'react';
/*import { AppContainer } from 'react-hot-loader';*/
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

import { Mainpage } from './pages/main/Mainpage';
import { Videopage } from './pages/video/Videopage';
import { FullVideoPage } from './pages/FullVideoPage';
import { VideoList } from './components/video-list/VideoList';

import { EmptyResults } from './components/empty-results/EmptyResults';


const render = () => {
    ReactDom.render((
        <Router>
            <App>

                <Switch>

                    <Route exact path="/" component={Mainpage}/>
                    <Route  path="/search" component={Mainpage} />

                    <Route path="/video">
                        <Videopage>
                            <Switch>
                                <Route exact path="/video" component={VideoList}/>
                                <Route path="/video/:title" component={FullVideoPage}/>
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
/*

if (module.hot) {
    module.hot.accept('./App', render);
}
*/
