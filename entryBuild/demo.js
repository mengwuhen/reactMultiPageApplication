import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../app/component/pages/demo/index.js';
import Header from '../app/component/common/Header';
import Footer from '../app/component/common/Footer';
ReactDOM.render([<Header key="Header"/>,<Index key="Index"/>,<Footer key="Footer"/>],document.getElementById('app'));