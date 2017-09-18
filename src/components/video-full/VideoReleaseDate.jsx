import React from 'react';


export class VideoReleaseDate extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                02.05.2017
            </div>
        )
    }
}