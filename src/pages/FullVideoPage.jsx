import React from 'react';
import * as s from './pages.scss';
import { VideoFull } from '../components/video-full/VideoFull.jsx';
import { VideoList } from '../components/video-list/VideoList.jsx';

export const FullVideoPage = (props) => {
    console.log(props);
    return (
        <div>
            <VideoFull props={props}/>
            <VideoList />
        </div>
    )
}
