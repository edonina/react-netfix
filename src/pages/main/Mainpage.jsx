import React from 'react';
import * as s from './main.scss';
import { Header } from '../../components/header/Header.jsx';
import { Footer } from '../../components/footer/Footer.jsx';
import { SearchField } from '../../components/search-field/SearchField.jsx';
import { SearchResults } from '../../components/search-results/SearchResults.jsx';
import { VideoList } from '../../components/video-list/VideoList';

import { Route, Switch } from 'react-router-dom';

export class Mainpage extends React.Component {

    constructor(...args) {
        super(...args);
        console.log("00000", this.props.match.params);

        this.state = {
            value: this.props.match.params.query || '',
            searchBy: 'title',
            sortBy: 'date'
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleSearchBy = this.toggleSearchBy.bind(this);
        this.toggleSortBy = this.toggleSortBy.bind(this);

        console.log('state', this.state)
    }


    handleChange(event) {
        console.log('=======', event.target.value);


        this.setState((prevState)=> {
                return {
                    value: event.target.value,
                    searchBy: prevState.searchBy,
                    sortBy: prevState.sortBy
                };
            }
        );
        console.log('state', this.state)
        console.log(event);

    }

    toggleSortBy(param) {
        this.setState((prevState)=> {
                return {
                    value: prevState.value,
                    searchBy: prevState.searchBy,
                    sortBy: param
                };
            }
        );
    }

    toggleSearchBy(param) {
        this.setState((prevState)=> {
                return {
                    value: prevState.value,
                    searchBy: param,
                    sortBy: prevState.sortBy
                };
            }
        );
    }

    render() {
        return (
            <div>
                <Header />
                <div className="page-content">
                    <SearchField handleChange={this.handleChange}
                                 toggleSearchBy={this.toggleSearchBy}
                                 inputValue={this.state.value}/>
                    <Switch>
                        <Route path="/search/:query" render={() => (
                            <SearchResults toggleSortBy={this.toggleSortBy} {...this.props} />
                        )}/>
                    </Switch>

                    {this.props.children}

                    <VideoList />
                </div>
                <Footer />
            </div>
        )
    }
}