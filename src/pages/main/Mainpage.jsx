import React from 'react';
import * as s from './main.scss';
import { Header } from '../../components/header/Header.jsx';
import { Footer } from '../../components/footer/Footer.jsx';
import { SearchField } from '../../components/search-field/SearchField.jsx';
import { SearchResults } from '../SearchResults.jsx';
import { SearchPage } from '../SearchPage.jsx';
import { VideoList } from '../../components/video-list/VideoList';



import { Route, Switch } from 'react-router-dom';

export class Mainpage extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            value: this.props.match.params.query || '',
            searchBy: 'title',
            sortBy: 'date'
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleSearchBy = this.toggleSearchBy.bind(this);
        this.toggleSortBy = this.toggleSortBy.bind(this);
        this.consoleState = this.consoleState.bind(this);
    }


    handleChange(event) {
        const newState = Object.assign({}, {
            value : event.target.value,
            searchBy: this.state.searchBy,
            sortBy: this.state.sortBy

        });

        this.setState(newState, this.consoleState);

        store.dispatch({
            value: event.target.value,
            type: UPDATE_SEARCH_QUERY
        });
    }

    toggleSortBy(param) {
        const newState = Object.assign({}, {
            value: this.state.value,
            searchBy: this.state.searchBy,
            sortBy: param
        });

        this.setState(newState, this.consoleState);

        store.dispatch({
            sortBy: param,
            type: UPDATE_SORT_BY
        });
    }

    consoleState(){
        console.log('state',this.state);
    }

    toggleSearchBy(param) {
        const newState = Object.assign({}, {
            value: this.state.value,
            searchBy: param,
            sortBy: this.state.sortBy
        });

        this.setState(newState, this.consoleState);

        store.dispatch({
            searchBy: param,
            type: UPDATE_SORT_BY
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="page-content">
                    <Switch>
                        <Route exact path='/search'  render={() => (
                            <SearchPage
                                toggleSearchBy={this.toggleSearchBy}
                                handleChange={this.handleChange}
                                state={this.state}
                                props={this.props}  />
                        )}/>

                        <Route path="/search/:query" render={() => (
                            <SearchResults
                                handleChange={this.handleChange}
                                toggleSearchBy={this.toggleSearchBy}
                                toggleSortBy={this.toggleSortBy}
                                state={this.state}
                                props={this.props}  />
                        )}/>

                    </Switch>

                    {this.props.children}

                </div>
                <Footer />
            </div>
        )
    }
}