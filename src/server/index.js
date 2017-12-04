import  React  from 'react';
import { renderToString } from 'react-dom/server';
import { App } from '../App';
import  templateFn from './template';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import routes from '../routes';
import configureStore from '../configureStore';

export default (req, res) => {
    const context = {};
    const store = configureStore();
   // console.log("store: ", store);
    const branch = matchRoutes(routes.routes, req.url);
    console.log("branch: ", branch);

    const promises = branch.map(({route, match})=>{
      //  console.log("route: ", route);
      //  console.log("match: ", match);

        const {fetchData} = route.component;

        if (!(fetchData instanceof Function)){
            return Promise.resolve(null);
        }
        return fetchData(store.dispatch, match);
    });


   /* return Promise.all(promises)
    .then(()=>{*/

            const html = renderToString(
                <Provider store={store}>
                    <Router context={context}>
                        <App />
                    </Router>
                </Provider>
            );
            const preloadedState = store.getState();
            const template = templateFn(html, preloadedState);
            return res.send(template);

       /* });*/


};
