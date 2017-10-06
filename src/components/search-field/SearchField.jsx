import React from 'react';
import * as s from './search.scss';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { SearchFilter } from './SearchFilter.jsx';

export class SearchField extends React.Component {

    constructor(...args) {
        super(...args);
        this.state= {value:''};
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div>
                <p className="search-call-to-action">Find your movie</p>
                <SearchInput  onChange={this.handleChange.bind(this)}  />
                <SearchButton />
                <SearchFilter />
            </div>
        )
    }
}