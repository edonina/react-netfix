import React from 'react';
import * as s from './video-list.scss';
import { VideoItem } from '../video-item/VideoItem.jsx';


export class VideoList extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div>
                <ul>
                    <li>VideoItem:
                        <VideoItem />
                    </li>
                </ul>
            </div>
        )
    }
}