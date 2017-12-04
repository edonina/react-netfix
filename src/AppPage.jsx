import React from 'react';
import * as s from './style.scss';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';

import { renderRoutes } from 'react-router-config';

export const AppPage = ({route}) => {
    return (
        <div>
            <Header />

            {children}
            <Footer />
        </div>
    )
}