import React from 'react';
import * as s from './video-item.scss';
import { ItemGenre } from './ItemGenre';
import { ItemImage } from './ItemImage';
import { ItemReleaseDate } from './ItemReleaseDate';
import { ItemTitle } from './ItemTitle';

export class VideoItem extends React.Component {

    constructor(...args) {
        super(...args);

        //this.title = "Attack on titan";
        console.log(this.props);
        this.link = '/video/';
       // this.link = '/video/' + this.props.video.title;

    }

    render() {
        return (
            <div className="video-item">
                <ItemImage />
                <ItemReleaseDate />
                <ItemTitle link={this.link}
                    />
                <ItemGenre />

            </div>
        )
    }
}