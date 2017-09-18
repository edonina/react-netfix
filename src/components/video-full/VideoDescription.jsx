import React from 'react';


export class VideoDescription extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <p>VideoDescription</p>
            </div>
        )
    }
}