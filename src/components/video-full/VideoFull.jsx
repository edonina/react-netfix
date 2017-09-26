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
import { VideoGenre } from './VideoGenre';

export class VideoFull extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="video-full">

                <VideoCover />
                <VideoRating />
                <VideoTitle />
                <VideoGenre />
                <VideoReleaseDate />
                <VideoDuration />
                <VideoDescription />
                <VideoDirector />
                <VideoCast />
            </div>

        )
    }
}