import React from 'react';
import * as s from './style.scss';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}