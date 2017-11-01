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

        this.state = {
            videoList: []
        };


         if(this.query){
            this.queryUrl = `https://api.themoviedb.org/3/search/movie${this.api_key}&query=${this.query}`;
         }

        if(store.getState().searchBy == 'year'){
            this.queryUrl += '&year=2017'
        }

        store.subscribe(() => {
            console.log("---",store.getState());
            //this.sortedList = store.getState().videoList;
            let sortedList;
            if (store.getState().sortBy == "popularity"){
                sortedList = this.state.videoList.sort(this.sortBy(store.getState().sortBy, true, parseInt))
            } else{
                sortedList = this.state.videoList.sort(this.sortBy(store.getState().sortBy, true))
            }

            this.setState({videoList: sortedList});
            console.log("===", this.state.videoList);
            console.log("===2", store.getState().sortBy)
        });


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

        this.getVideos();
    }

    getVideos() {
        //console.log("==-------2", this.queryUrl);
        axios.get(this.queryUrl)
            .then((response) => {
                //console.log("55555555",store);

                let sortedList = response.data.results.sort(this.sortBy(store.getState().sortBy, true))
                this.setState({videoList: sortedList});
               /* store.dispatch({
                    state: store.getState(),
                    videoList: response.data.results,
                    type: 'UPDATE_VIDEO_LIST'
                });*/

                //console.log("===", store.getState().videoList);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    sortBy (field, reverse, primer){

        var key = primer ?
            function(x) {return primer(x[field])} :
            function(x) {return x[field]};

        reverse = !reverse ? 1 : -1;

        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    }


    render() {

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