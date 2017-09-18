import React from 'react';


export class VideoTitle extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <h1>
                Film title
            </h1>
        )
    }
}