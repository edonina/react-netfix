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

import PlayerAPI from '../../api.js'

export const VideoFull = (props) =>  {
    console.log('9999', props.video.original_title)



        return (
            <div className="video-full">
                <VideoCover />
                <VideoRating />
                <VideoTitle  title = {props.video.original_title} />
                <VideoGenre />
                <VideoReleaseDate />
                <VideoDuration />
                <VideoDescription />
                <VideoDirector />
                <VideoCast />
            </div>
        )

}