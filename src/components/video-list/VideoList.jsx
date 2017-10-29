import React from 'react';
import * as s from './video-list.scss';
import { VideoItem } from '../video-item/VideoItem.jsx';
import * as axios from 'axios';


export class VideoList extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {videoList: []};
    }

    componentDidMount() {
        this.getVideos();
    }

    getVideos() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c17dfbbe9ca443af08d10f471640700c')
            .then((response) => {
                this.setState({videoList: response.data.results});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        let listItems = this.state.videoList.map((video) =>
            <li key={video.id}><VideoItem video={video}/></li>
        );

        return (
            <div className="video-list">
                <ul>{listItems}</ul>
                <p>--------------</p>
            </div>
        )
    }
}