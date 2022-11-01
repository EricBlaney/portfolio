import React, { Component } from 'react';
import {createRoot } from 'react-dom/client';
import { ReactDOM } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './Landing';
import GraceShopper from './GraceShopper';
import ScratchingPost from './ScratchingPost';
import GravitySim from './GravitySim';

class App extends React.Component{


    render() {
        return(
            <div>
                <Routes>
                <Route path='/' element={<><Landing/><GraceShopper/><ScratchingPost/><GravitySim/></>}/>
                </Routes>

            </div>
        )
    }
}


const root = createRoot(document.querySelector('#root'));
root.render(<Router><App /></Router>);