import React from 'react';


export class VideoCover extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <img src="#" />
            </div>
        )
    }
}