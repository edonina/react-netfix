import React from 'react';
import { AppContainer } from 'react-hot-loader';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const render = () => {
    ReactDom.render((
        <Router>
            <App>
                /* https://habrahabr.ru/post/329996/
                <Switch>
                    <Route exact path="/" component={Welcome} />

                    <Route path="/posts">
                        {(args) => (
                        <Posts {...args}>
                            <Switch>
                                <Route exact path="/posts" component={List} />
                                <Route path="/posts/article/:name" component={Article} />
                            </Switch>
                        </Posts>
                            )}
                    </Route>

                    <Route path="/about/:tab/:section" component={About} />

                    <Route path="*" component={NotFound} />

                </Switch>*/
            </App>
        </Router>
    ), document.getElementById('app'));
}

render();

if (module.hot) {
    module.hot.accept('./App', render);
}
