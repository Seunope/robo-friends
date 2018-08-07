import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardList from '../src/components/CardList';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <CardList />, 
    document.getElementById('root'));
registerServiceWorker();
