import React from 'react';


export const VideoGenre = ({genres = []}) => {

    let genresList = genres.map((genre) => {
       return <span key={genre.id}>{genre.name} </span>
    });

    return (
        <p className="video-full-genre">
            {genresList}
        </p>
    )
}