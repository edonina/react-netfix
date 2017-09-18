import React from 'react';


export class VideoCast extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                VideoCast
            </div>
        )
    }
}