import React from 'react';
import * as s from './video-full.scss';
import { VideoTitle } from './VideoTitle';
import { VideoCover } from './VideoCover';
import { VideoRating } from './VideoRating';
import { VideoReleaseDate } from './VideoReleaseDate';
import { VideoDuration } from './VideoDuration';
import { VideoDescription } from './VideoDescription';
import { VideoDirector } from './VideoDirector';
import { VideoGenre } from './VideoGenre';


export const VideoFull = (props) =>  {
    console.log('9999', props.video.original_title)
   let {original_title, runtime, release_date, genres, overview, poster_path, popularity } = props.video;


        return (
            <div className="video-full">
                <VideoCover  path={poster_path} />
                <VideoRating popularity={popularity} />
                <VideoTitle  title = {original_title} />
                <VideoGenre genres ={genres} />
                <VideoReleaseDate releaseDate={release_date} />
                <VideoDuration duration ={runtime}  />
                <VideoDescription  overview ={overview} />
                <VideoDirector />
            </div>
        )

}