import React from 'react';
import * as s from './video.scss';

export class Videopage extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div >
                11. Film cover
                12. Film title
                13. Film rating
                14. Search button
                Returns user to the main page with search
                15. Film duration and release year
                16. Description
                17. Director and cast list
                18. Films by the same director
            </div>
        )
    }
}