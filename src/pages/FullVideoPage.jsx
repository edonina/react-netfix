import React from 'react';
import * as s from './pages.scss';
import { Header } from '../components/header/Header.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { VideoFull } from '../components/video-full/VideoFull.jsx';
import { VideoList } from '../components/video-list/VideoList.jsx';
import { Route, Switch } from 'react-router-dom';

export const FullVideoPage = (props) => {



        console.log(props);
        return (
            <div >


                    <VideoFull props={props} />
                    <VideoList />


            </div>
        )
    }
