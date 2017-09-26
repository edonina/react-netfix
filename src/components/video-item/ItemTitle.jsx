import React from 'react';
import { Link } from 'react-router-dom'


export class ItemTitle extends React.Component {
    render() {
        return (
            <span className="video-item-title">
                <Link to={this.props.link}>{this.props.title}</Link>
            </span>
        )
    }
}