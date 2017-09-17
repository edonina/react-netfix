import React from 'react';
import { Item } from './pages/Mainpage';
import { Dropdown } from './pages/Videopage';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Mainpage />
                <Videopage />
            </div>
        )
    }
}