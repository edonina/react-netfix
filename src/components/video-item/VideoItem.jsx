import React from 'react';
import * as s from './video-item.scss';
import { ItemGenre } from './ItemGenre';
import { ItemImage } from './ItemImage';
import { ItemReleaseDate } from './ItemReleaseDate';
import { ItemTitle } from './ItemTitle';

export class VideoItem extends React.Component {

    constructor(...args) {
        super(...args);

        this.title = "Attack on titan";

        this.link = '/video/' + this.props.title;

    }

    render() {
        return (
            <div className="video-item">
                <ItemImage />
                <ItemReleaseDate />
                <ItemTitle link={this.link} title={this.props.title} />
                <ItemGenre />

            </div>
        )
    }
}