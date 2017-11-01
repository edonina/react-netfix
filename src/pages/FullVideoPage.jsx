import React from 'react';
import * as s from './pages.scss';
import * as axios from 'axios';
import { VideoFull } from '../components/video-full/VideoFull.jsx';
import { VideoList } from '../components/video-list/VideoList.jsx';

export class FullVideoPage extends React.Component {
    constructor(...args) {
        super(...args);

        this.id =  this.props.match.params.id;
        console.log('+++', this.props.match.params.id)

        this.state = {video: {}};
    }

    componentWillMount() {
        console.log('componentDidMount', this.props.match.params.id)
        this.getFullVideoInfo(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps){

        console.log('componentWillReceiveProps', newProps.match.params.id)
        this.getFullVideoInfo(newProps.match.params.id);
    }



    getFullVideoInfo(id) {

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c17dfbbe9ca443af08d10f471640700c`)
            .then( (response) =>  {
                console.log("========================",response.data);
                this.setState({ video: response.data })
            })
            .catch( (error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <VideoFull video= {this.state.video} />
                <VideoList  props={this.props} />

            </div>
        );
    }
}