import React from 'react';

export const ItemImage = ({src}) => {
    return (
        <div className="video-item-image">
            <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/{src}" />
        </div>
    )
}