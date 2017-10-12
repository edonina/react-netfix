import React from 'react';
import * as s from './search-results.scss';
import { SearchResultsCount } from './SearchResultsCount';
import { SearchResultsFilter } from './SearchResultsFilter';
import { VideoList } from '../video-list/VideoList';

export class SearchResults extends React.Component {

    constructor(...args) {
        super(...args);
        console.log(this.props.match.params);
        console.log(this.props.match.params.query);
        this.toggleSearchBy = this.toggleSearchBy.bind(this);
        this.state= {
            searchQuery: this.props.match.params.query,
            searchField: 'title'
        };
    }

    toggleSearchBy(e){
        this.setState({
            searchQuery: this.props.match.params.query,
            sortBy: ''
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="search-results">
                <SearchResultsFilter toggleSearchBy={this.toggleSearchBy} />
                <SearchResultsCount />
                <VideoList searchQuery={this.state.searchQuery} sortBy={this.state.sortBy} />
            </div>
        )
    }
}