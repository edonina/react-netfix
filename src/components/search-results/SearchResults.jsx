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
        this.state= {
            searchQuery: this.props.match.params.query,
            searchField: 'title'
        };
    }

    toggleSearchField(e){
        this.setState({
            searchQuery: this.props.match.params.query,
            searchField: event.target.value
        });
        console.log(e);

    }

    render() {
        return (
            <div className="search-results">
                <SearchResultsFilter toggleSearchField={this.toggleSearchField.bind(this)} />
                <SearchResultsCount />
                <VideoList searchQuery={this.state.searchQuery} searchFeild={this.state.searchField} />
            </div>
        )
    }
}