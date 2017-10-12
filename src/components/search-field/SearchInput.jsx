import React from 'react';
import {withRouter} from 'react-router-dom';


export const SearchInput = ()=>{
        return (
            <div>
                <input type="search"
                       className="search-input"
                       onChange={this.props.handleChange}
                       value={this.props.inputValue}  />
            </div>
        )

}