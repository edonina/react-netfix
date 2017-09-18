import React from 'react';
import * as s from './video.scss';
import { Header } from '../../components/header/Header.jsx';
import { Footer } from '../../components/footer/Footer.jsx';
import { VideoFull } from '../../components/video-full/VideoFull.jsx';
import { VideoList } from '../../components/video-list/VideoList.jsx';

export class Videopage extends React.Component {

    constructor(...args) {
        super(...args);

        this.state = {
            isOpened: false
        };
    }

    render() {
        return (
            <div >
                <Header />
                <VideoFull />
                <VideoList />
                <Footer />
            </div>
        )
    }
}