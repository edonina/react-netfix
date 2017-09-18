import React from 'react';


export class SearchInput extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (

                <input type="search" className="search-input" />

        )
    }
}