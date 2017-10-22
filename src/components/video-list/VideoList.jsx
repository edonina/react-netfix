import React from 'react';
import * as s from './video-list.scss';
import { VideoItem } from '../video-item/VideoItem.jsx';


export const VideoList =(props )=>{

        return (
            <div className="video-list">
                <p>--------------</p>
                <VideoItem {...{title: "Kill Bill"}} />
                <VideoItem {...{title: "Leon"}}  />
                <VideoItem {...{title: "Kill Bill2"}} />
                <VideoItem {...{title: "The Beach"}} />
                <VideoItem {...{title: "Good Father"}} />
            </div>
        )

}