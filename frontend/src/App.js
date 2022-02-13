import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import Header from './components/header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from './pages/NotFound/NotFound';

const App = () => (
    <>
        <Header />
        <main className="main-content">
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="*" component={NotFound}  />
            </Switch>
        </main>
    </>
);

export default App;
