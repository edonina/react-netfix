import React from 'react';
import * as s from './search.scss';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';
import { SearchFilter } from './SearchFilter.jsx';


export const SearchField = ({handleChange, inputValue, toggleSearchBy})=> {
    return (
        <div>
            <p className="search-call-to-action">Find your movie</p>
            <SearchInput handleChange={handleChange}/>
            <SearchButton inputValue={inputValue}/>
            <SearchFilter toggleSearchBy={toggleSearchBy}/>
        </div>
    )
}
