import React from 'react';
import {withRouter} from 'react-router-dom';


export class SearchInput extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div>
                <input type="search"

                       className="search-input"
                       onChange={this.props.handleChange}
                       value={this.props.inputValue}  />
            </div>
        )
    }
}