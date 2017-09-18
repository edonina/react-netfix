import React from 'react';
import * as s from './video-item.scss';
import { ItemGenre } from './ItemGenre';
import { ItemImage } from './ItemImage';
import { ItemReleaseDate } from './ItemReleaseDate';
import { ItemTitle } from './ItemTitle';

export class VideoItem extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <ItemTitle />
                <ItemGenre />
                <ItemReleaseDate />
                <ItemImage />
            </div>
        )
    }
}