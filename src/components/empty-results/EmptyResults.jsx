import React from 'react';
import * as s from './empty-results.scss';

export class EmptyResults extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div className="no-results">No films found</div>
        )
    }
}