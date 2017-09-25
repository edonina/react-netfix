import React from 'react';


export class VideoDirector extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <p className="video-full-director">
                Director: Quentin Tarantino
            </p>
        )
    }
}