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
        console.log("params: ", this.props.match.params);

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
    }

    toggleSortBy(param) {
        const newState = Object.assign({}, {
            value: this.state.value,
            searchBy: this.state.searchBy,
            sortBy: param
        });

        this.setState(newState, this.consoleState);
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
                        <Route exact path='/search' component={VideoList}/>
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