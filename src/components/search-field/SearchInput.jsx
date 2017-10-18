import React from 'react';
import {withRouter} from 'react-router-dom';


export const SearchInput = ({handleChange})=> {
    return (
        <div>
            <input type="search"
                   className="search-input"
                   onChange={handleChange}

            />
        </div>
    )
}