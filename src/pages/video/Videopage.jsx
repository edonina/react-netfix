import React from 'react';
import * as s from './video.scss';
import { Header } from '../../components/header/Header.jsx';
import { Footer } from '../../components/footer/Footer.jsx';
import { VideoFull } from '../../components/video-full/VideoFull.jsx';
import { VideoList } from '../../components/video-list/VideoList.jsx';
import { Route, Switch } from 'react-router-dom';

export class Videopage extends React.Component {

    constructor(...args) {
        super(...args);
       // console.log("00000",this.props.match.params);

    }

    render() {
        return (
            <div >
                <Header />
                <div className="page-content">
                    {this.props.children}
                    <VideoList />
                </div>
                <Footer />
            </div>
        )
    }
}