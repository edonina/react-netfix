import React from 'react';
import { Link } from 'react-router-dom'


export const ItemTitle = (props) => {
    return (
        <span className="video-item-title">
                <Link to={props.link}>{props.title}</Link>
            </span>
    )
}