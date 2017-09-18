import React from 'react';
import * as s from './header.scss';

export class Header extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
           <div className="logo">netflixroulette</div>
        )
    }
}