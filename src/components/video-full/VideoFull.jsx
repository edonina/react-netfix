import React from 'react';
import * as s from './video-full.scss';
import { VideoTitle } from './VideoTitle';
import { VideoCover } from './VideoCover';
import { VideoRating } from './VideoRating';
import { VideoReleaseDate } from './VideoReleaseDate';
import { VideoDuration } from './VideoDuration';
import { VideoDescription } from './VideoDescription';
import { VideoDirector } from './VideoDirector';
import { VideoCast } from './VideoCast';

export class VideoFull extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <VideoTitle />
                <VideoCover />
                <VideoRating />
                <VideoReleaseDate />
                <VideoDuration />
                <VideoDescription />
                <VideoDirector />
            </div>
        )
    }
}