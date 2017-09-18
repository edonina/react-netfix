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
            <div>
                <input type="search" />
            </div>
        )
    }
}