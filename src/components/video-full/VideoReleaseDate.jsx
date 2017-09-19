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
            <div className="video-full-date">
                1994
            </div>
        )
    }
}