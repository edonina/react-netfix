import React from 'react';
import * as s from './main.scss';
import { Header } from '../../components/header/Header.jsx';
import { Footer } from '../../components/footer/Footer.jsx';
import { SearchField } from '../../components/search-field/SearchField.jsx';
import { SearchResults } from '../../components/search-results/SearchResults.jsx';

export class Mainpage extends React.Component {

    constructor(...args) {
        super(...args);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="page-content">
                    <SearchField />
                    <SearchResults />
                </div>
                <Footer />
            </div>
        )
    }
}