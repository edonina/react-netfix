import React from 'react';
import * as s from './header.scss';

export class Header extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
           <div className="logo">netflixroulette</div>
        )
    }
}