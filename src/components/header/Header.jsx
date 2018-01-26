import React from 'react';
import * as s from './header.scss';
import { Link } from 'react-router-dom'

export class Header extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="header">
                <div className="logo">netflixroulette</div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/video'>Video</Link></li>

                    </ul>
                </nav>
            </div>
        )
    }
}