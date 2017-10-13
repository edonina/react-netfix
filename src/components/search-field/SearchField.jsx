import React from 'react';
import * as s from './search.scss';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { SearchFilter } from './SearchFilter.jsx';

export class SearchField extends React.Component {

    constructor(...args) {
        super(...args);
        this.state= {value:'ljhljuglgj'};

    }

    handleChange(event){
        console.log('=======');
        this.setState({value: event.target.value});
        console.log(event);
        console.log(event.target.value);

    }

    render() {

        return (
            <div>
                <p className="search-call-to-action">Find your movie</p>
                <SearchInput
                    handleChange={this.handleChange.bind(this)}
                    inputValue={this.state.value}

                    />
                <SearchButton inputValue={this.state.value} />
                <SearchFilter />
            </div>
        )
    }
}