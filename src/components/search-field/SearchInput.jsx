import React from 'react';
import {withRouter} from 'react-router-dom';


export class SearchInput extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div>
                <input type="search" value={this.state.value} ref='searchInput' className="search-input"    />

            </div>
        )
    }
}