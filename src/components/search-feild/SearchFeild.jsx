import React from 'react';
import * as s from './search.scss';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { SearchFiter } from './SearchFiter';

export class SearchFeild extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <SearchInput />
                <SearchButton />
                <SearchFiter />
            </div>
        )
    }
}