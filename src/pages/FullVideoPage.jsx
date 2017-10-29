import React from 'react';
import * as s from './pages.scss';
import * as axios from 'axios';
import { VideoFull } from '../components/video-full/VideoFull.jsx';
import { VideoList } from '../components/video-list/VideoList.jsx';

export class FullVideoPage extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = {video: {}};
    }

    componentDidMount() {
        this.getFullVideoInfo();
    }

    getFullVideoInfo() {

        axios.get('https://api.themoviedb.org/3/movie/550?api_key=c17dfbbe9ca443af08d10f471640700c')
            .then( (response) =>  {
                console.log(response.data);
                this.setState({ video: response.data })
            })
            .catch( (error) => {
                console.log(error);
            });


    }

    render() {
       /* const persons = this.state.person.map((item, i) => (
            <div>
                <h1>{ item.name.first }</h1>
                <span>{ item.cell }, { item.email }</span>
            </div>
        ));*/
        console.log(this.state);

        return (
            <div>
                <VideoFull video= {this.state.video} />
                <VideoList />
            </div>
        );
    }
}