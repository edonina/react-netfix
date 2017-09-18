import React from 'react';


export class VideoDirector extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                VideoDirector
            </div>
        )
    }
}