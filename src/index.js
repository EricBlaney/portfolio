import React, { Component } from 'react';
import {createRoot } from 'react-dom/client';
import { ReactDOM } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

class App extends React.Component{


    render() {
        return(
            <div>
                Testing
            </div>
        )
    }
}


const root = createRoot(document.querySelector('#root'));
root.render(<Router><App /></Router>);