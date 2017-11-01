import React from 'react';
import * as s from './video-list.scss';
import { VideoItem } from '../video-item/VideoItem.jsx';
import * as axios from 'axios';
import { store } from '../../reducers/store';


export class VideoList extends React.Component {
    constructor(...args) {
        super(...args);


        this.query = this.props.props.match.params.query || '';
        this.api_key = "?api_key=c17dfbbe9ca443af08d10f471640700c"
        this.queryUrl = `https://api.themoviedb.org/3/discover/movie${this.api_key}`;
        //this.queryUrl = `https://api.themoviedb.org/3/search/movie${this.api_key}`;

        this.state = {
            videoList: []
        };

         if(this.query){
            this.queryUrl = `https://api.themoviedb.org/3/search/movie${this.api_key}&query=${this.query}`;
             //console.log("===", store.getState());
         }
        console.log("0000000", this.state);

       // console.log("this.queryUrl", this.queryUrl);



    }

    componentWillMount() {
        this.getVideos();
    }
    componentWillReceiveProps(newProps){
        if(newProps.props.match.params.query){
            this.queryUrl = `https://api.themoviedb.org/3/search/movie${this.api_key}&query=${newProps.props.match.params.query}`;
        }else{
            this.queryUrl = this.queryUrl = `https://api.themoviedb.org/3/discover/movie${this.api_key}`;
        }

        console.log('componentWillReceiveProps SEarch', newProps.props.match.params.query)
        this.getVideos();
    }

    getVideos() {
        //console.log("==-------2", this.queryUrl);
        axios.get(this.queryUrl)
            .then((response) => {
                //console.log("55555555",store);
                this.setState({videoList: response.data.results});
               /* store.dispatch({
                    state: store.getState(),
                    videoList: response.data.results,
                    type: 'UPDATE_VIDEO_LIST'
                });
                */
                //console.log("===", store.getState().videoList);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {

        //console.log("===2", store.getState().videoList);
        let listItems = this.state.videoList.map((video) =>
            <li key={Math.random()}><VideoItem video={video}/></li>
        );

        //console.log("===+++++++", listItems);

        return (
            <div className="video-list">
                <ul>{listItems}</ul>
                <p>--------------</p>
            </div>
        )
    }
}