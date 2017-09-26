import React from 'react';
import { Link } from 'react-router-dom'


export class ItemTitle extends React.Component {

    constructor(...args) {
        super(...args);
        this.title = "Video title";
        this.link = '/video/'+this.title;
    }

    render() {
        return (
            <span className="video-item-title">
                <Link to='/video/#{this.title}'>{this.title}</Link>

            </span>
        )
    }
}