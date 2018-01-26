import React from 'react';
import { Link } from 'react-router-dom'


export const ItemTitle = ({title, link}) => {
    return (
        <span className="video-item-title">
                <Link to={link}>{title}</Link>
            </span>
    )
}