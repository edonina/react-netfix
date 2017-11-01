import React from 'react';
import * as s from './video-item.scss';
import { ItemGenre } from './ItemGenre';
import { ItemImage } from './ItemImage';
import { ItemReleaseDate } from './ItemReleaseDate';
import { ItemTitle } from './ItemTitle';

export class VideoItem extends React.Component {

    constructor(...args) {
        super(...args);
        this.link = '/video/' + this.props.video.id;
    }

    render() {
       // console.log("----", this.props.video)
        const { title, release_date, poster_path, genre_ids } = this.props.video;
        return (
            <div className="video-item">
                <ItemImage src={poster_path}/>
                <ItemReleaseDate releaseDate={release_date}/>
                <ItemTitle link={this.link} title={title} />
                <ItemGenre genreIds={genre_ids}/>

            </div>
        )
    }
}