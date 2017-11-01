import React from 'react';

export const ItemImage = ({src}) => {
    const fullPath= 'https://image.tmdb.org/t/p/w300'+ src;

    return (
        <div className="video-item-image">
            <img width="100%" src={fullPath} />
        </div>
    )
}