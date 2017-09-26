import React from 'react';
import * as s from './video-list.scss';
import { VideoItem } from '../video-item/VideoItem.jsx';


export class VideoList extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div className="video-list">
                <VideoItem {...{title: "Kill Bill"}} />
                <VideoItem {...{title: "Leon"}}  />
                <VideoItem {...{title: "Kill Bill2"}} />
                <VideoItem {...{title: "The Beach"}} />
                <VideoItem {...{title: "Good Father"}} />
            </div>
        )
    }
}