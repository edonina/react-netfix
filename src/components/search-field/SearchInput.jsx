import React from 'react';
import {withRouter} from 'react-router-dom';


export const SearchInput = ({handleChange, inputValue})=>{
        return (
            <div>
                <input type="search"
                       className="search-input"
                       onChange={this.handleChange}
                       value={this.inputValue}  />
            </div>
        )

}