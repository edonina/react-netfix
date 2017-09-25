import React from 'react';
import * as s from './style.scss';
import { Mainpage } from './pages/main/Mainpage';
import { Videopage } from './pages/video/Videopage';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Mainpage />
                <div className="clearfix"></div>
                <Videopage />
            </div>
        )
    }
}