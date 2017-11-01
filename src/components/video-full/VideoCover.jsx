import React from 'react';


export const VideoCover = ({path}) => {
    const fullPath= 'https://image.tmdb.org/t/p/w300'+ path;
    return (
        <div className="video-full-image">
            <img src={fullPath} width="100%" />
        </div>
    )
}